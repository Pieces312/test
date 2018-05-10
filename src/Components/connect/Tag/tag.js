import React, { Component } from 'react'

import "./tag.less";
import { Table } from 'antd';

const columns = [{
  title: '元素',
  dataIndex: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'a',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

export class TableTag extends Component {
  render() {
    return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
      />
    )
  }
}
