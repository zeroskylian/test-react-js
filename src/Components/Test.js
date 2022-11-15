import React from "react";
import PropTypes from "prop-types";

export default class TestCC extends React.Component {
  // 用于限定 组件接收什么参数
  static propTypes = {
    // isRequired 用于限定是否必传
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };

  // 用于限定
  static defaultProps = {
    age: 3,
  };

  render() {
    return (
      <div>
        {this.props.name}=== {this.props.age}
      </div>
    );
  }
}
