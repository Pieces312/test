import React, { Component } from 'react';

import InfoOfDate from "./AboutCalendar";

class GetDays extends Component {
  constructor(props) {
    super(props);
    let year = this.props.year;
    let month = this.props.month;
    let numbers = InfoOfDate.getAllDays(year, month);
    this.state = {
      year,
      month,
      numbers
    }
  }
  componentWillReceiveProps(nextProps) {
    let changeDate = InfoOfDate.getAllDays(nextProps.year, nextProps.month);
    this.setState({
      year: nextProps.year,
      month: nextProps.month,
      numbers: changeDate
    })
  }
  render() {
    let mm = this.state.month;
    let day = this.props.day;
    return (
      <tbody>
        {
          this.state.numbers.map(
            (item, index) => {
              return (
                <tr key={index}>
                  {item.map(
                    (td, idx) => {
                      return <td className={day === td.day ? "today" : ""} name={td.month === mm ? 'this' : 'not'} key={idx}>{td.day}</td>
                    }
                  )}
                </tr>
              )
            }
          )
        }
      </tbody>
    )
  }
}

export default GetDays;
