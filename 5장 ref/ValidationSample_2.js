import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    //onChange 이벤트 발생시 호출
    this.setState({
      // state의 password 값 업데이트
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    //onClick 이벤트 발생시 호출
    this.setState({
      //clicked 값을 참으로 설정
      clicked: true,
      validated: this.state.password === "0000", // validated는 검증 결과
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            /*버튼 누르기전 : 비어있는 문자열
                          버튼 누른후 : 검증 결과 따라 success or failure */
            this.state.clicked
              ? this.state.validated
                ? "success" // css에서 초록색
                : "failure" // css에서 빨간색
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
