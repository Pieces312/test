import React, {Component} from 'react';
// css
import './Tree.less';
import Tobytrs from './ListTr';

class Tree extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      lists: [
        { 'id': 1, 'name': 'John', 'level': 1, 'collapse': false, 'collapse1': true, 'remarks': '11111111', 'hasChild': true },
        { 'id': 21, 'name': 'Alice', 'level': 2, 'collapse': false, 'collapse1': true, 'remarks': '22221111', 'hasChild': true },
        { 'id': 22, 'name': 'Alice', 'level': 3, 'collapse': false, 'collapse1': true, 'remarks': '33331111', 'hasChild': false },
        { 'id': 23, 'name': 'Alice', 'level': 3, 'collapse': false, 'collapse1': true, 'remarks': '33332222', 'hasChild': true },
        { 'id': 231, 'name': 'Alice', 'level': 4, 'collapse': false, 'collapse1': true, 'remarks': '4444411111', 'hasChild': false },
        { 'id': 232, 'name': 'Alice', 'level': 4, 'collapse': false, 'collapse1': true, 'remarks': '4444422222', 'hasChild': false },
        { 'id': 24, 'name': 'Alice', 'level': 2, 'collapse': false, 'collapse1': true, 'remarks': '22222222', 'hasChild': true },
        { 'id': 31, 'name': 'Tom', 'level': 3, 'collapse': false, 'collapse1': true, 'remarks': '22222222', 'hasChild': false },
        { 'id': 4, 'name': 'Bob', 'level': 1, 'collapse': false, 'collapse1': true, 'remarks': '11112222', 'hasChild': true },
        { 'id': 5, 'name': 'Alex', 'level': 2, 'collapse': false, 'collapse1': true, 'remarks': '122221111', 'hasChild': false }
      ]
    }
  }
  handleListClick(index, collapse) {
    let level = index.level;
    let list = this.state.lists;
    let idx = list.indexOf(index);

    if(collapse) {
      for(let i = idx + 1; i < list.length; i++) {
        let ch = list[i];

        if(ch.level > level) {
          ch.collapse = true;
          ch.collapse1 = true;
        } else if(ch.level <= level) {
          break;
        }
      }

    } else {
      for(let i = idx + 1; i < list.length; i++) {
        let ch = list[i];

        if(ch.level ===  (level + 1)) {
          ch.collapse = false;
          ch.collapse1 = false;
        } else if(ch.level <= level) {
          break;
        }
      }
    }

    index.collapse1 = !index.collapse1;
    this.setState({ lists: list})
  }
  render() {
    return (
      <table className='tabelTree'>
        <thead>
          <tr>
            <th width='15%'>ID</th>
            <th width='30%'>Name</th>
            <th width='50%'>Remarks</th>
          </tr>
        </thead>
        <Tobytrs lists={this.state.lists} listClick={this.handleListClick.bind(this)} />
      </table>
    );
  }
}

export default Tree;
