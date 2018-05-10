import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./header.less";
import Breadcrumb from './breadcrumb.js';

import { Layout, Icon } from 'antd';
const { Header } = Layout;


class Head extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      collapsed: false,
    };
  }
  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    this.props.changeStatus(this.state.collapsed);
  }
  render() {
    return (
      <Header style={{ background: "#fff", padding: '0 20px' }}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          title={this.state.collapsed ? '展开' : '收缩'}
          onClick={this.handleToggle.bind(this)}
          />
          <div className="userInfo">
            <Link to="/"><img src="http://img.hb.aicdn.com/994f88005f604f1f3cedf524295d1018ccf9adb72a4c3-4R7H95_fw658" alt="头像" title="头像" /></Link>
            <Icon className="off" title="注销账号" type="poweroff" />
          </div>
          <Breadcrumb />
      </Header>
    );
  }
}

export default Head;
