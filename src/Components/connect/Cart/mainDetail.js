import React, {Component} from 'react';

class MainDetail extends Component {
  constructor(props) {
    super(props);

    let active = this.props.active;
    this.state = {
      top: -active * 300,
      mainList: [
        {
          id: 1,
          list: [
            {
              id: 11,
              name: '商品1',
              pic: "https://f12.baidu.com/it/u=1773370537,2404250031&fm=72",
              price: "￥2610",
              number: 0,
              isShow: false
            },{
              id: 12,
              name: '商品2',
              pic: "https://f11.baidu.com/it/u=3389538806,1178863563&fm=72",
              price: "￥20",
              number: 0,
              isShow: false
            },{
              id: 13,
              name: '商品3',
              pic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2691736817,2146402935&fm=27&gp=0.jpg",
              price: "￥210",
              number: 0,
              isShow: false
            }
          ]
        },{
          id: 2,
          main: '22222222222222222'
        },{
          id: 3,
          main: '33333333333333333'
        },{
          id: 4,
          main: '44444444444444444'
        },{
          id: 5,
          main: '55555555555555555'
        },{
          id: 6,
          main: '66666666666666666'
        },{
          id: 7,
          main: '77777777777777777'
        },{
          id: 8,
          main: '88888888888888888'
        },{
          id: 9,
          main: '99999999999999999'
        },{
          id: 10,
          main: '10 10 10 10 10 10'
        },{
          id: 11,
          main: '11 11 11 11 11 11'
        }

      ]
    }
  }
  handleWheel = (ev) => {
    ev.persist();
    let item = ev._targetInst.index;

    this.props.changeIndex(item);
  }
  //数量递减
  handleMinus(parent, index) {
    let cart = this.state.mainList;

    cart[parent].list[index].number--;

    if(cart[parent].list[index].number <= 0) {
      cart[parent].list[index].number = 0;
      cart[parent].list[index].isShow = false;
    }

    this.setState( {
      mainList: cart
    } )
  }
  //数量递增
  handleAdd(parent, index, ev) {
    ev.persist();
    let cart = this.state.mainList;

    cart[parent].list[index].number++;
    cart[parent].list[index].isShow = true;
    let top = ev.clientY;
    let left = ev.clientX;

    console.log(top, left);
    this.setState( {
      mainList: cart
    } )
  }
  render() {
    return (
      <div className="mainDetail">
        <div className="mainContainer" onWheel={this.handleWheel.bind(this)}>
          {this.state.mainList.map(
            (item, index) =>
            <div className='itemsDetail' key={item.id}>
              {item.main || item.list.map((good, idx) =>
                <div className="goodsItem" key={good.id}>
                  <div className="pic"><img src={good.pic} alt={good.name} /></div>
                  <div className="gdsInfo">
                    <p className="gdsName">{good.name} <span>{good.price}</span></p>
                    <p className="gdsNumber">
                      <span style={{display: good.isShow ? 'inline-block' : 'none'}} onClick={this.handleMinus.bind(this, index, idx)}>-</span>
                      <input style={{display: good.isShow ? 'inline-block' : 'none'}} type="number" value={good.number} placeholder="0" />
                      <span onClick={this.handleAdd.bind(this, index, idx)}>+</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainDetail;
