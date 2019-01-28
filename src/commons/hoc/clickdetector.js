import React from 'react';
import ReactDOM from 'react-dom';

const clickDetector = WrappedComponent => {
  class Detector extends React.Component {
    componentWillMount() {
      document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = async e => {
      if(!ReactDOM.findDOMNode(this).contains(e.target) &&
        !ReactDOM.findDOMNode(this.props.menuRef.current).contains(e.target) && this.props.isMenuActive) {
        this.props.onClick();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }


  return Detector;
};

export default clickDetector;
