import React from "react";
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fabric } from "fabric";

import { Box } from 'commons/styled';
import imagesReducer from "reducers/images";
import Filter from "components/Home/Filter";
import { Wrapper, CanvasWrapper, Row, Column } from "./styled";

const SBox = styled(Box)`
  width: 100%;
  background: #f4f4f4;
`;

class ImageBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: undefined,
      selected: undefined
    };
  }

  handleDeleteKey(event) {
    if (event.keyCode === 46 || event.keyCode === 8) {
      event.preventDefault();
      console.log('selected state', this.state.selected);
      if (this.state.selected !== undefined) {
        this.canvas.remove(this.state.selected);
        this.setState({ selected: undefined });
      }
    }
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas("canvas");
    document.addEventListener(
      "keydown",
      this.handleDeleteKey.bind(this),
      false
    );
    this.canvas.on("object:selected", e => this.setState({ selected: e.target }));
    this.canvas.on("selection:cleared", e => this.setState({ selected: undefined }));
    // this.setState({ canvas: this.canvas });
    this.canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', this.canvas.renderAll.bind(this.canvas))
    // this.setCanvasBackground(this.props.images, this.canvas);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.images !==
      this.props.images
    ) {
      this.setCanvasBackground(
        this.props.images,
        this.canvas
      );
    }
    // this.setCanvasBackground(
    //   this.props.images,
    //   this.state.canvas
    // );
  }

  setCanvasBackground(image, canvas) {
    canvas.setBackgroundImage(image, e => {
      let iw = canvas.backgroundImage.width,
        ih = canvas.backgroundImage.height,
        cw = canvas.getWidth(),
        ch = canvas.getHeight();

      let iar = iw / ih,
        car = cw / ch;

      let nw = cw,
        nh = ch;

      if (iar > car) {
        nh = ch;
        nw = nh * iar;
      } else if (iar < car) {
        nw = cw;
        nh = cw / iar;
      }
      canvas.backgroundImage.width = nw;
      canvas.backgroundImage.height = nh;
      canvas.renderAll();
    });
  }

  addText = (val) => {
    if (val || val.checked) {
      console.log("val", val);
      let text = new fabric.IText("Double click me to change the text!", {
        fontSize: 28,
        fontWeight: 600,
        left: 100,
        top: 100,
        fill: "black",
        width: 20,
        height: 20
      });
      this.canvas.add(text);
    } else {
      console.log('active object', this.state.selected)
      this.canvas.on("text:editing:entered", () => console.log('hello'));
    }
  }

  addSubtitle = (val) => {
    if (val || val.checked) {
      const text = new fabric.IText("subtitle", {
        fontSize: 24,
        fontWeight: 400,
        left: 100,
        top: 200,
        fill: "white",
        width: 20,
        height: 20
      });
      this.canvas.add(text);
    }
  }

  opacityChange = val => {
    console.log('val', val)
    // this.canvas.backgroundImage.setOpacity(val / 100);
    // this.canvas.renderAll();
  }

  applyFontStyle = values => {
    const { selected } = this.state;
    if (selected !== undefined) {
      const object = selected.canvas.getActiveObject();
      values.forEach(val => {
        console.log('val -->', val);
        switch(val.value) {
          case "bold":
            debugger;
            object.set("fontWeight", 'bold');
            break;
          case "normal":
            object.set("fontWeight", 'normal');
            break;
          case "italic":
            object.set("fontStyle", "italic");
            break;
          case "overline":
            object.set("textDecoration", "overline");
            break;
          case "underline":
            object.set("textDecoration", "underline");
            break;
          case "linethrough":
            object.set("textDecoration", "line-through");
            break;
          default:
            break;
        }
        this.canvas.renderAll();
      });
    } else {
      this.setState({
        error: 'You need to select the text first'
      })
    }
  }

  applyFontSize = size => {
    const { selected } = this.state;
    if (selected !== undefined) {
      const object = selected.canvas.getActiveObject();
      object.set("fontSize", size.value);
      this.canvas.renderAll();
    } else {
      this.setState({
        error: 'You need to select the text first'
      })
    }
  }

  applyFontFamily = font => {
    const { selected } = this.state;
    if (selected !== undefined) {
      const object = selected.canvas.getActiveObject();
      object.set("fontFamily", font.value);
      this.canvas.renderAll();
    } else {
      this.setState({
        error: 'You need to select the text first'
      })
    }
  }

  applyColor = e => {
    if (this.state.selected !== undefined) {
      this.state.selected.setColor(e.hex);
      this.canvas.renderAll();
    } else {
      this.setState({
        error: 'You need to select the text first'
      })
    }
  }

  applyBackgroundColor = e => {
      if (this.canvas.backgroundImage) {
        this.canvas.backgroundImage = 0;
      }
      this.canvas.backgroundColor = e.hex;
      this.canvas.renderAll();
  }

  applyGrayScale = (checked, value = "average") => {
    const { selected } = this.state;
    if (selected !== undefined) {
      const obj = selected.canvas.getActiveObject();
      if (checked) {
        obj.filters[0] = new fabric.Image.filters.Grayscale();
        obj.applyFilters();
        this.canvas.renderAll();
      } else {
        obj.filters = [];
        obj.applyFilters();
        this.canvas.renderAll();
      }
    } else {
      const obj = this.canvas.backgroundImage;
      if (obj && checked) {
        obj.filters[0] = new fabric.Image.filters.Grayscale();
        obj.applyFilters();
        this.canvas.renderAll();
      } else {
        obj.filters = [];
        obj.applyFilters();
        this.canvas.renderAll();
      }
    }
  }

  applyBlur = value => {
    const object = this.canvas.backgroundImage;
    object.filters[0] = new fabric.Image.filters.Blur({
      blur: parseFloat(value/5)
    });
    object.applyFilters();
    this.canvas.renderAll();
  }

  applyBrightness = value => {
    const object = this.canvas.backgroundImage;
    object.filters[0] = new fabric.Image.filters.Brightness({
      brightness: parseFloat(value/5)
    });
    object.applyFilters();
    this.canvas.renderAll();
  }

  applyContrast = value => {
    const object = this.canvas.backgroundImage;
    // console.log('value', value);
    // if (value <= 0) {
    //   object.filters = [];
    // }
    object.filters[0] = new fabric.Image.filters.Contrast({
      contrast: parseFloat(value/5)
    });
    object.applyFilters();
    this.canvas.renderAll();
  }

  applyOpacity = value => {
    const object = this.canvas.backgroundImage;
    object.set({
        opacity: value
    });
    this.canvas.renderAll();
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <Column width={80}>
            <CanvasWrapper>
              <canvas
                id="canvas"
                ref={el => (this.canvasEl = el)}
                width={580}
                height={400}
                className="z-depth-1"
              />
            </CanvasWrapper>
          </Column>
          <SBox>
            <Column width={20}>
              <Filter
                addText={this.addText}
                addSubtitle={this.addSubtitle}
                applyOpacity={this.applyOpacity}
                applyFontStyle={this.applyFontStyle}
                applyFontSize={this.applyFontSize}
                applyFontFamily={this.applyFontFamily}
                applyColor={this.applyColor}
                applyBackgroundColor={this.applyBackgroundColor}
                applyBlur={this.applyBlur}
                applyContrast={this.applyContrast}
                applyBrightness={this.applyBrightness}
                applyGrayScale={this.applyGrayScale}
              />
            </Column>
          </SBox>
        </Row>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log('state changed', state)
  return {
    images: state.images.selectedImage
  };
};

export default connect(mapStateToProps)(ImageBoard);

// const ImageBoard = (props) => {
//   let canvasEl = React.useRef(null);
//   const [selected, setSelected] = React.useState(null)
//   const [canvasState, setCanvas] = React.useState(null)
//   const [state, _] = React.useReducer(imagesReducer, {selectedImage: require('assets/images/image1.jpg')})
//
//   const setCanvasBackground = (image, canvas) => {
//     if (image) {
//       canvas.setBackgroundImage(image, e => {
//         let iw = canvas.backgroundImage.width,
//           ih = canvas.backgroundImage.height,
//           cw = canvas.getWidth(),
//           ch = canvas.getHeight();
//
//         let iar = iw / ih,
//           car = cw / ch;
//
//         let nw = cw,
//           nh = ch;
//
//         if (iar > car) {
//           nh = ch;
//           nw = nh * iar;
//         } else if (iar < car) {
//           nw = cw;
//           nh = cw / iar;
//         }
//         canvas.backgroundImage.width = nw;
//         canvas.backgroundImage.height = nh;
//         canvas.renderAll();
//       });
//     }
//   }
//
//   const handleDeleteKey = event => {
//     if (event.keyCode === 46 || event.keyCode === 8) {
//       event.preventDefault();
//       console.log('canvasState', canvasState);
//       if (selected !== undefined) {
//         canvasState.remove(selected);
//         setSelected(undefined);
//       }
//     }
//   }
//
//   React.useEffect(() => {
//     // runs once on mount
//     const canvasRef = new fabric.Canvas("canvas");
//     document.addEventListener(
//       "keydown",
//       handleDeleteKey,
//       false
//     );
//     canvasRef.on("object:selected", e => setSelected(e.target));
//     canvasRef.on("selection:cleared", e => setSelected(undefined));
//     setCanvas(canvasRef);
//     setCanvasBackground(state.selectedImage, canvasRef);
//     return () => {
//       document.removeEventListener("keydown", handleDeleteKey, false);
//     }
//   }, [])
//
//   React.useEffect(() => {
//     // runs every time new getSelectedImage is received, including initial render
//     setCanvasBackground(props.getSelectedImage, canvasState);
//   }, [props.getSelectedImage])
//
//   // no idea how should i implement this in useEffect
//   // componentDidUpdate(prevProps) {
//   //     if (prevProps.getSelectedImage !== this.props.getSelectedImage) {
//   //       this.setCanvasBackground(this.props.getSelectedImage,this.state.canvas);
//   //     }
//   //     this.setCanvasBackground(this.props.getSelectedImage,this.state.canvas);
//   //   }
//
//   const addText = val => {
//     if (val || val.checked) {
//       let text = new fabric.IText("Double click me to change the text!", {
//         fontSize: 28,
//         fontWeight: 600,
//         left: 100,
//         top: 100,
//         fill: "black",
//         width: 20,
//         height: 20
//       });
//       canvasState.add(text);
//     }
//   }
//
//   const addSubtitle = val => {
//     if (val || val.checked) {
//       const text = new fabric.IText("subtitle", {
//         fontSize: 24,
//         fontWeight: 400,
//         left: 100,
//         top: 200,
//         fill: "white",
//         width: 20,
//         height: 20
//       });
//       canvasState.add(text);
//     }
//   }
//
//   const applyOpacityChange =val => {
//     canvasState.backgroundImage.setOpacity(val / 100);
//     canvasState.renderAll();
//   }
//
//   const applyFontStyle = val => {
//     console.log("val", val.value);
//     const object = selected.canvas.getActiveObject();
//     val.value.forEach(val => {
//       if (val === "bold") {
//         object.set("fontWeight", 900);
//       } else if (val === "normal") {
//         object.set("fontWeight", 400);
//       } else if (val === "italic") {
//         object.set("fontStyle", "italic");
//       } else if (val === "overline") {
//         object.set("textDecoration", "overline");
//       } else if (val === "underline") {
//         object.set("textDecoration", "underline");
//       } else if (val === "linethrough") {
//         object.set("textDecoration", "line-through");
//       }
//       canvasState.renderAll();
//     });
//   }
//
//   const applyColor = e => {
//     selected.setColor(e.hex);
//     canvasState.renderAll();
//   }
//
//   const applyBlur = e => {
//     const object = canvasState.backgroundImage;
//     object.filters[0] = new fabric.Image.filters.Convolute({
//       matrix: [
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36,
//         1 / 36
//       ]
//     });
//     object.applyFilters(canvasState.renderAll.bind(canvasState));
//   }
//
//   console.log('props', props)
//   return (
//     <Wrapper>
//       <Row>
//         <Column width={80}>
//         <CanvasWrapper>
//           <canvas
//             id="canvas"
//             ref={canvasEl}
//             width={500}
//             height={400}
//             className="z-depth-1"
//           />
//           </CanvasWrapper>
//         </Column>
//         <Column width={20}>
//          <Filter
//            addText={addText}
//            addSubtitle={addSubtitle}
//            opacityChange={opacityChange}
//            applyFontStyle={applyFontStyle}
//            applyColor={applyColor}
//            applyBlur={applyBlur}
//          />
//         </Column>
//       </Row>
//     </Wrapper>
//   );
// }
//
//
//
// export default ImageBoard;
// export default connect(state => { return {getSelectedImage: state.images.selectedImage} }, null)(ImageBoard);
