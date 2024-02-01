import React, { Component } from 'react';

// 파일 이름이 RCC.jsx 이므로 리액트 컴포넌트의 클래스 이름을 RCC로 만든 것
class RCC extends Component {
  render() {
    var text = '따옴표';
    return <div name="name">{text}</div>;
  }
}

export default RCC;
