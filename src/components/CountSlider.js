import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class CountSlider extends Component {

  state = {
    minCount: this.props.minCount
  }

  onCountSliderChange = (minCount) => {
    const cleanMinCount = Number(minCount) ? minCount : this.state.minCount;
    this.setState({
      minCount: cleanMinCount,
    });
    this.props.onCountSliderChange(cleanMinCount);
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={2} max={20} onChange={this.onCountSliderChange} value={this.state.minCount} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={2}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.minCount}
            onChange={this.onCountSliderChange}
          />
        </Col>
      </Row>
    );
  }
}
