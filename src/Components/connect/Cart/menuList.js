import React, {Component} from 'react';

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainList: [
        {
          id: 1,
          name: '选项1'
        },{
          id: 2,
          name: '选项2'
        },{
          id: 3,
          name: '选项3'
        },{
          id: 4,
          name: '选项4'
        },{
          id: 5,
          name: '选项5'
        },{
          id: 6,
          name: '选项6'
        },{
          id: 7,
          name: '选项7'
        },{
          id: 8,
          name: '选项8'
        },{
          id: 9,
          name: '选项9'
        },{
          id: 10,
          name: '选项10'
        },{
          id: 11,
          name: '选项11'
        }

      ]
    }
  }
  handleClick(index) {
    this.props.changeIndex(index);
  }
  render() {
    let active = this.props.active;
    return (
      <div className="menuList">
        <ul>
          {this.state.mainList.map(
            (item, index) => <li onClick={this.handleClick.bind(this, index)} className={active === index ? 'active' : ''} key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MenuList;
