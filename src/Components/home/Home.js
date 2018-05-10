import React, { Component } from 'react';

import './home.less';
import { Row, Col, List, Card, Avatar } from 'antd';
const { Meta } = Card;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tips: [
        {
          id: 1,
          title: "最新消息",
          num: 2013,
          back: "#db8e0a"
        },{
          id: 2,
          title: "收藏",
          num: 540,
          back: "#109ad5"
        },{
          id: 3,
          title: "邮件",
          num: 4106,
          back: "#03cc3b"
        },{
          id: 4,
          title: "图片",
          num: 1609,
          back: "#d2480d"
        },
      ],
      data: [
        '11111111111111',
        '22222222222222222222',
        '33333333333',
        '4444444444444444',
        '55555555514444444444444444',
        '66666666666666666666666',
        '7',
        '8888'
      ]
    }
  }
  render() {
    return (
        <div>
          <Row>
            {
              this.state.tips.map((tip, index) => {
                return <Col span={6} key={index}>
                        <div className="gutter-box" style={{backgroundColor: tip.back}}>
                          <i className="icon"></i>
                          <div className="infos">
                            <p>{tip.title}</p>
                            <h2>{tip.num}</h2>
                          </div>
                        </div>
                      </Col>
              })
            }
          </Row>
          <Row>
            <Col span={8}>
              <div className="gutter-box">
                <List
                  header={<div>First List in this box</div>}
                  bordered
                  dataSource={this.state.data}
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
              </div>
            </Col>
            <Col span={8}><div className="gutter-box">888888888</div></Col>
            <Col span={8}>
              <div className="gutter-box">
                <Card>
                  <Meta
                    className="card-header"
                    avatar={<Avatar src="http://img.hb.aicdn.com/994f88005f604f1f3cedf524295d1018ccf9adb72a4c3-4R7H95_fw658" width="60" height="60" />}
                    title="暖阳"
                    description="逆风的方向更适合飞翔，我不怕万人阻挡，只怕自己投降。">
                  </Meta>
                  <div className="card-content">
                    <ul>
                      <li>
                        <a>HTML</a>
                        <span className="lineBar"></span>
                      </li>
                      <li>
                        <a>CSS</a>
                        <span className="lineBar"></span>
                      </li>
                      <li>
                        <a>Javascript</a>
                        <span className="lineBar"></span>
                      </li>
                      <li>
                        <a>React</a>
                        <span className="lineBar"></span>
                      </li>
                      <li>
                        <a>Photoshop</a>
                        <span className="lineBar"></span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

export default Home;
