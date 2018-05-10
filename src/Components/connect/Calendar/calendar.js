import React, { Component } from 'react';

import "./calendar.less";
import GetDays from "./getDays.js"

import { Card, Icon } from 'antd';

class Calender extends Component {
  constructor(props) {
    super(props);

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    this.state = {
      year,
      month,
      day
    }
  }
  // change calendar data
  handleChangeDate(type) {
    let y = this.state.year;
    let m = this.state.month - 1;
    let d = this.state.day;
    let mm = new Date(y, m, d);

    let last = (type === "minus") ?
        new Date(mm.setMonth(mm.getMonth() - 1))
        : new Date(mm.setMonth(mm.getMonth() + 1));

    let lastY = last.getFullYear();
    let lastM = last.getMonth() + 1;
    let lastD = last.getDate();

    this.setState({
      year: lastY,
      month: lastM,
      day: lastD
    });

  }
  handleBackToday() {
    let now = new Date();

    this.setState({
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
    });
  }
  render() {
    return (
      <Card
        className="calendar"
        type="inner"
        title="JS实现日历"
        >
        <div className="tableHead">
          <Icon onClick={this.handleChangeDate.bind(this, 'minus')} className="fl" type="caret-left" />
          <Icon onClick={this.handleChangeDate.bind(this, 'add')} className="fr" type="caret-right" />
          <p>{this.state.year}年{this.state.month}月 <span onClick={this.handleBackToday.bind(this)} className="backToday">今</span></p>
        </div>
        <table className="showDays">
          <thead>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
          </thead>
          <GetDays year={this.state.year} month={this.state.month} day={this.state.day} />
        </table>
      </Card>
    )
  }
}

export default Calender;
