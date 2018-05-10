import React from 'react'
import { withRouter } from 'react-router-dom' ;
import { Breadcrumb } from 'antd';

//读取路由配置文件
import { linksRoute } from '../../routes/route.js';

const pathName = linksRoute.breadcrumbs;

/*
  route

 */

 const getBreakCrumbItems = history => {
   let Items = [
      (
       <Breadcrumb.Item key="/">首页</Breadcrumb.Item>
     )
   ];
   let url = history.location.pathname;

   let extraBreadcrumbItems = url => (
     <Breadcrumb.Item key={url} style={{ cursor: 'pointer' }}>
       {pathName[ url ]}
     </Breadcrumb.Item>
   )

   if(extraBreadcrumbItems) {
     return Items.concat(extraBreadcrumbItems(url));
   }
 }

 export default (history) => {
    const Content = withRouter( history => {
      const Item = getBreakCrumbItems( history );
      
      return (
        <div className="breadNav">
          {Item && (
              <Breadcrumb>
  							{Item}
  						</Breadcrumb>
            )
          }
        </div>
      )
    } );

    return <Content />
 }
