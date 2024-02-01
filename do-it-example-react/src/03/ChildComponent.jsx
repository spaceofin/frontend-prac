import React from 'react';
import PropTypes from 'prop-types';

// 객체 구조 분해 할당식을 사용하여 프로퍼티에 전달된 값들을 함수 내의 지역 변수로 재정의함
class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <br />
        <span>불리언값: {boolValue}</span>
        <br />
        <span>숫자값: {numValue}</span>
        <br />
        <span>배열값: {arrayValue}</span>
        <br />
        <span>객체값: {String(objValue)}</span>
        <br />
        <span>노드값: {nodeValue}</span>
        <br />
        <span>함수값: {String(funcValue)}</span>
        <br />
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
