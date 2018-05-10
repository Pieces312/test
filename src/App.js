import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.less';

import SideBar from './Components/Sidebar/sideBar.js';
import Connect from './Components/connect/connect.js';
import Header from './Components/Header/header.js';

import { Layout } from 'antd';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      collapsed: false,
    };
  }
  changeStatus(status) {
    this.setState({
      collapsed: !status
    });
  }
  render() {
    return (
      <Router>
        <Layout>
          <SideBar status={this.state.collapsed} />
          <Layout>
            <Header changeStatus={this.changeStatus.bind(this)} />
            <Connect />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
