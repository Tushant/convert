import React from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

const getColor = props => {
  if (props.isDragReject) {
    return "#c66";
  }
  if (props.isDragActive) {
    return "#6c6";
  }
  return "#666";
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${props => getColor(props)};
  border-style: ${props =>
    props.isDragReject || props.isDragActive ? "solid" : "dashed"};
  background-color: ${props =>
    props.isDragReject || props.isDragActive ? "#eee" : ""};
`;

const PreviewWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Preview = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

const PreviewInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const Uploader = () => {
  const [files, setFiles] = React.useState([]);

  const onDrop = files => {
    setFiles(
      files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };

  const thumbs = files.map(file => (
    <Preview key={file.name}>
      <PreviewInner>
        <Image src={file.preview} />
      </PreviewInner>
    </Preview>
  ));

  return (
    <Dropzone accept="image/*" onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
      }) => {
        return (
          <React.Fragment>
              <Container
                isDragActive={isDragActive}
                isDragReject={isDragReject}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragAccept ? "Drop" : "Drag"} files here...
              </Container>
            <PreviewWrapper>{thumbs}</PreviewWrapper>
          </React.Fragment>
        );
      }}
    </Dropzone>
  );
};

export default Uploader;
