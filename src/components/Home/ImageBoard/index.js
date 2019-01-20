import React from "react";
import { fabric } from "fabric";

import imagesReducer from "reducers/images";
import Filter from 'components/Home/Filter';
import { Wrapper, CanvasWrapper, Row, Column } from "./styled";

const ImageBoard = () => {
  let canvasEl = React.useRef(null);
  const [selected, setSelected] = React.useState(null)
  const [canvas, setCanvas] = React.useState(null)
  const [state, _] = React.useReducer(imagesReducer, [])

  const setCanvasBackground = (image, canvas) => {
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

  const handleDeleteKey = event => {
    if (event.keyCode === 46 || event.keyCode === 8) {
      event.preventDefault();
      if (selected !== undefined) {
        canvas.remove(selected);
        setSelected(undefined);
      }
    }
  }

  React.useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    document.addEventListener(
      "keydown",
      handleDeleteKey,
      false
    );
    canvas.on("object:selected", e => setSelected(e.target));
    canvas.on("selection:cleared", e => setSelected(undefined));
    setCanvas(canvas);
    setCanvasBackground(state.images.selectedImage, canvas);
    return () => {
      document.removeEventListener("keydown", handleDeleteKey, false);
    }
  }, [])

  // no idea how should i implement this in useEffect
  // componentDidUpdate(prevProps) {
  //     if (prevProps.getSelectedImage !== this.props.getSelectedImage) {
  //       this.setCanvasBackground(this.props.getSelectedImage,this.state.canvas);
  //     }
  //     this.setCanvasBackground(this.props.getSelectedImage,this.state.canvas);
  //   }

  const addText = val => {
    if (val || val.checked) {
      let text = new fabric.IText("Double click me to change the text!", {
        fontSize: 28,
        fontWeight: 600,
        left: 100,
        top: 100,
        fill: "black",
        width: 20,
        height: 20
      });
      canvas.add(text);
    }
  }

  const addSubtitle = val => {
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
      canvas.add(text);
    }
  }

  const opacityChange =val => {
    canvas.backgroundImage.setOpacity(val / 100);
    canvas.renderAll();
  }

  const applyTextFilter = val => {
    console.log("val", val.value);
    const object = selected.canvas.getActiveObject();
    val.value.forEach(val => {
      if (val === "bold") {
        object.set("fontWeight", 900);
      } else if (val === "normal") {
        object.set("fontWeight", 400);
      } else if (val === "italic") {
        object.set("fontStyle", "italic");
      } else if (val === "overline") {
        object.set("textDecoration", "overline");
      } else if (val === "underline") {
        object.set("textDecoration", "underline");
      } else if (val === "linethrough") {
        object.set("textDecoration", "line-through");
      }
      canvas.renderAll();
    });
  }

  const applyColor = e => {
    selected.setColor(e.hex);
    canvas.renderAll();
  }

  const applyBlur = e => {
    const object = canvas.backgroundImage;
    object.filters[0] = new fabric.Image.filters.Convolute({
      matrix: [
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36,
        1 / 36
      ]
    });
    object.applyFilters(canvas.renderAll.bind(canvas));
  }

  return (
    <Wrapper>
      <Row>
        <Column width={80}>
        <CanvasWrapper>
          <canvas
            id="canvas"
            ref={canvasEl}
            width={500}
            height={400}
            className="z-depth-1"
          />
          </CanvasWrapper>
        </Column>
        <Column width={20}>
         <Filter
           addText={addText}
           addSubtitle={addSubtitle}
           opacityChange={opacityChange}
           applyTextFilter={applyTextFilter}
           applyColor={applyColor}
           applyBlur={applyBlur}
         />
        </Column>
      </Row>
    </Wrapper>
  );
}



export default ImageBoard;
// export default connect(state => { return {getSelectedImage: state.images.selectedImage} }, null)(ImageBoard);
