import React from 'react';

import Home from '../Components/home/Home.js';
import { HtmlSemantics } from '../Components/connect/Html/index.js';
import { TableTag } from '../Components/connect/Tag/tag.js';
import Cart from '../Components/connect/Cart/cart.js';
import Calendar from '../Components/connect/Calendar/calendar.js';
import ClipPath from '../Components/connect/clipPath/ClipPath.js';
import Tree from '../Components/connect/TreeMenu/Tree.js';

export const linksRoute = {
  routes: [
      {
        id: 1,
        title: 'HTML',
        icons: 'user',
        subs: [
          {
            id: 11,
            subTile: 'HTML的语义化',
            url: '/html'
          },{
            id: 14,
            subTile: 'HTML5新增元素',
            url: '/tag'
          }
        ]
      },{
        id: 2,
        title: 'CSS',
        icons: 'user',
        subs: [
          {
            id: 21,
            subTile: 'CSS的语义化',
            url: '/css'
          },{
            id: 23,
            subTile: 'CSS3 clip-path',
            url: '/clipPath'
          },{
            id: 24,
            subTile: 'CSS3新增属性',
            url: ''
          }
        ]
      },{
        id: 3,
        title: 'JavaSscript',
        icons: 'user',
        subs: [
          {
            id: 31,
            subTile: 'JS购物车动画',
            url: '/cart'
          },{
            id: 32,
            subTile: 'JS日历',
            url: '/calendar'
          },{
            id: 33,
            subTile: 'JS树形菜单',
            url: '/tree'
          }
        ]
      },{
        id: 4,
        title: 'jQuery',
        icons: 'user',
        url: '/jquery'
      }
    ],

    componentsRoute: [
      { // 路由配置数组
        path: '/',
        exact: true,
        main: Home
      }, {
        path: '/html',
        main: HtmlSemantics
      }, {
        path: '/tag',
        main: TableTag
      }, {
        path: '/css',
        main: () => <h2>CSS的语义化</h2>
      }, {
        path: '/clipPath',
        main: ClipPath
      }, {
        path: '/cart',
        main: Cart
      }, {
        path: '/calendar',
        main: Calendar
      }, {
        path: '/tree',
        main: Tree
      }, {
        path: '/jquery',
        main: () => <h2>jQuery</h2>
      }
    ],

    breadcrumbs: {
      "/html": "HTML / HTML的语义化",
      "/tag": "HTML / HTML5新增元素",
      "/css": "CSS / CSS的语义化",
      "/clipPath": "CSS / CSS3 clip-path属性",
      "/javascript": "JavaSscript",
      "/cart": "JavaSscript / JS购物车动画",
      "/calendar": "JavaSscript / JS日历",
      "/calendar": "JavaSscript / JS树形菜单",
      "/jquery": "jQuery"
    }
}
