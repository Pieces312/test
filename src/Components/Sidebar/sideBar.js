import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './sideBar.less';
import { linksRoute } from '../../routes/route.js';

import {Layout, Menu, Icon} from 'antd';
const {SubMenu} = Menu;
const {Sider} = Layout;

class sideBar extends Component {
  render() {
    return (
      <Sider trigger={null} collapsible="collapsible" collapsed={this.props.status}>
        <div className="logo">
          <Link to = "/">
            <Icon className="icon" type="gitlab" />
          </Link>
        </div>
        <Menu theme="dark" mode="inline">
          {
            linksRoute.routes.map((link) => {
              return link.url
                    ?
                    <Menu.Item key={link.id}>
                      <Link to={link.url}>
                        <Icon type={link.icons} />
                        <span>{link.title}</span>
                      </Link>
                    </Menu.Item>
                    :
                    <SubMenu key={link.id} title={<span><Icon type = {link.icons} /><span>{link.title}</span></span>}>
                      {
                        link.subs.map((item) => (
                          <Menu.Item key={item.id}> {item.url ? <Link to = {item.url}> {item.subTile}</Link> : item.subTile}</Menu.Item>
                        ))
                      }
                    </SubMenu>
            })
          }
        </Menu>
      </Sider>
    );
  }
}

export default sideBar;
