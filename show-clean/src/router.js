import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './app'
import Login from './pages/login'
import Index from './pages/Index'
import Home from './pages/home'
import FromLogin from './pages/login'
export default class IRouter extends React.Component {
	render() {
		return (
			<HashRouter>
				<App>
					<Route path="/login" component={Login}></Route>
					<Route path="/admin" render={() =>
						<Index>
							<Switch>
								<Route path="/admin/home" component={Home}></Route>
								<Route path="/admin/form/login" component={FromLogin}></Route>
							</Switch>
						</Index>
					}></Route>
					<Redirect from="/*" to="/login"></Redirect>
				</App>
			</HashRouter>
		)
	}
}