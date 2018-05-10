import React, { Component } from 'react'
import { Route, Router, Switch, withRouter } from 'dva/router'
import { Breadcrumb, Icon } from 'antd';
//读取路由配置文件
import routes from './routes'
import mapMenus from 'app/config/map-menu';


const pathMapName = mapMenus.pathMapName;

const getBreadcrumnItems = history => {
	let goHref = path => history.replace( path ),
		Items = [ (
			<Breadcrumb.Item key='/' style={{ cursor: 'pointer' }}>
				<Icon type="home"/>
				<span onClick={() => goHref( '/' )}>首页</span>
			</Breadcrumb.Item>
		) ];

	const pathSnippets = history.location.pathname.split( '/' ).filter( i => i );
	const extraBreadcrumbItems = pathSnippets.map( ( _, index ) => {
		const url = `/${pathSnippets.slice( 0, index + 1 ).join( '/' )}`;
		if ( !pathMapName[ url ] ) return null;
		return (
			<Breadcrumb.Item key={url} style={{ cursor: 'pointer' }}>
				<Icon type={pathMapName[ url ][ 1 ]}/>
				<span onClick={() => goHref( url )}>{pathMapName[ url ][ 0 ]}</span>
			</Breadcrumb.Item>
		);

	} );

	if ( extraBreadcrumbItems && extraBreadcrumbItems[ 0 ] ) {
		return Items.concat( extraBreadcrumbItems );
	}

	return null;
}
/**
 *
 * 前端路由
 * @param history
 * @return {RouterComponents}
 */
export default ( { history } ) => {
	const Items = getBreadcrumnItems( history );
	const Content = withRouter( props => {
		return (
			<div>
				{Items && (
					<div style={{ padding: '0 20px', background: '#F1F5F8' }}>
						<Breadcrumb style={{ padding: '20px 0' }}>
							{Items}
						</Breadcrumb>
					</div>
				)}
				< Switch>
					{routes.map( val => <Route key={val.path} path={val.path} component={val.component} exact/> )}
				</Switch>
			</div>

		);
	} );

	return (
		<Router history={history}>
			<Content/>
		</Router>
	)

}
