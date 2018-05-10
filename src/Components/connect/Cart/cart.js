import React, {Component} from 'react';
// css
import './cart.less';

import MenuList from './menuList.js';
import MainDetail from './mainDetail.js';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      total: 0
    }
  }
  changeIndex(index) {
    this.setState( {index} )
  }
  render() {
    return (
      <div className="cart">
        <div className="header">购物车动画案例</div>
        <div className="main">
          <MenuList changeIndex={this.changeIndex.bind(this)} active={this.state.index} />
          <MainDetail changeIndex={this.changeIndex.bind(this)} active={this.state.index} />
        </div>
        <div className="footer">Footer 购物车数量 <span style={{display: this.state.total ? 'block' : 'none'}} className="total">{this.state.total}</span></div>
      </div>
    );
  }
}

export default Cart;
