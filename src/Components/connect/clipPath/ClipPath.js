import React, { Component } from 'react';

import "./ClipPath.less"

import { Card, Col, Row } from 'antd';

class ClipPath extends Component {
  render() {
    return (
      <Card
        className="clip-path"
        title="CSS3 clip-path属性"
      >
        <dl>
          <dt className="sub-title">定义</dt>
          <dd className="sub-content">
            <p className="effect">clip-path 属性可以通过定义裁剪区域来决定目标元素哪个区域可见，哪个区域不可见，也就是只有在闭合路径内的部分才显示，区域以外的部分就不显示。例如矩形rectangle, 圆circle, 椭圆ellipse, 多边形polygon, 以及inset剪裁。可以通过url 引入内嵌的或者外置的SVG，又或者是直接用自带的形状为clip-path 属性指定路径。 Clip-path 属性是clip属性的替代者，也可以说是clip属性的升级版。</p>
          </dd>
        </dl>
        <dl>
          <dt className="sub-title">基本语法</dt>
          <dd className="sub-content">
            <ul>
              <p className="notes">/* Keyword values */</p>
              <li>clip-path: none;</li>
              <li>clip-path: fill-box;</li>
              <li>clip-path: stroke-box;</li>
              <li>clip-path: view-box;</li>
              <p className="notes">/* Keyword values */</p>
              <li>clip-path: none;</li>
              <li>clip-path: fill-box;</li>
              <li>clip-path: stroke-box;</li>
              <li>clip-path: view-box;</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt className="sub-title">案例</dt>
          <dd className="sub-content">
            <Row gutter={16}>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="三角形裁剪图片">
                  <img className="triangle" src="https://img04.sogoucdn.com/app/a/100520093/3c28af542f2d49f7-da1566425074a021-4dd500a08535394bc4c64c68f672a2d6.jpg" alt="triangle"/>
                  <p>clip-path: polygon(50% 0, 0 100%, 100% 100%);</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="椭圆裁剪图片">
                  <img className="circle" src="https://img02.sogoucdn.com/app/a/100520093/9243fbcd523532c7-65a10dc900adf004-16cb2e34a14409c94f53ee8772786500.jpg" alt="rect"/>
                    <p>clip-path: ellipse(100% 25% at 50% 45%);</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="多边形裁剪图片">
                  <img className="polygon" src="https://img04.sogoucdn.com/app/a/100520093/013d20860a59d114-df5b4a05f7c173f3-7e866343d6ed14122f7512cd53e13aad.jpg" alt="polygon"/>
                    <p>clip-path: polygon(20% 20%, 80% 20%, 100% 80%, 0 80%);</p>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="对话窗裁剪图片(带有css动画)">
                  <img className="dialog" src="https://img03.sogoucdn.com/app/a/100520093/12400ee0679b6e1e-f0b91d6f9753a2cf-9fb4d606d750ecb83231b016ed7b5fd3.jpg" alt="dialog"/>
                    <p>clip-path: polygon(0% 0%,100% 0%,100% 80%,73% 80%,75% 100%,55% 80%,0% 80%);</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="星形裁剪图片">
                  <img className="star" src="http://img5.imgtn.bdimg.com/it/u=3740306931,545986730&fm=27&gp=0.jpg" alt="star"/>
                    <p>clip-path: polygon(50% 0, 60% 40%, 100% 40%, 68% 65%, 75% 100%, 50% 75%, 25% 100%, 32% 65%, 0 40%, 40% 40%);</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="examples-item" type="inner" title="叶子裁剪图片">
                  <img className="leaf" src="https://img03.sogoucdn.com/app/a/100520093/2ad11b094c93197d-4afaf786506af54b-9fd277aea03c8387ebd35dcfba4ba3dd.jpg" alt="leaf"/>
                    <p>clip-path: inset(10% 10% 10% 10% round 0 70% 0 70%);</p>
                </Card>
              </Col>
            </Row>
          </dd>
        </dl>
      </Card>
    )
  }
}

export default ClipPath
