import React, { Component } from 'react';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';
import CountSlider from './CountSlider';
import ShotChart from './ShotChart';

const RadioGroup = Radio.Group;

export default class DataViewContainer extends Component {

  state = {
    minCount: 2,
    chartType: "hexbin",
    displayTooltip: true
  }

  onCountSliderChange = (minCount) => {
    this.setState({minCount});
  }

  onChartTypeChange = (e) => {
    const chartType = e.target.value;
    this.setState({chartType});
  }

  onDisplayTooltipChange = (displayTooltip) => {
    this.setState({displayTooltip});
  }

  render() {
    return (
      <div className="data-view">
        <ShotChart
          playerId={this.props.playerId}
          minCount={this.state.minCount}
          displayTooltip={this.state.displayTooltip}
          chartType={this.state.chartType}
        />
        <div className="filters">
          {
            this.state.chartType === "hexbin" ?
              <CountSlider
                minCount={this.state.minCount}
                onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
              /> : null
          }
          <br/>
          <Row>
            <Col span={9}>
              <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                <Radio value="hexbin">Hexbin</Radio>
                <Radio value="scatter">Scatter</Radio>
              </RadioGroup>
            </Col>
            <Col span={4}>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                onChange={this.onDisplayTooltipChange}
                defaultChecked />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
