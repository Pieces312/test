import React, {Component} from 'react';
import { Route } from 'react-router-dom';
// css
import './connect.less';
import { linksRoute } from '../../routes/route.js';

import { Layout } from 'antd';
const { Content } = Layout;


class Connect extends Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px' }}>
        {linksRoute.componentsRoute.map((route, index) => {
           return <Route
             key={index}
             path={route.path}
             exact={route.exact}
             component={route.main}
           />
       })}
      </Content>
    );
  }
}

export default Connect;
