import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solide black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      positon: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
