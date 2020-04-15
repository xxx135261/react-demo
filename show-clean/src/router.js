import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider} from 'mobx-react'
import store from './store'
import App from './app'
import Login from './pages/login'
import Index from './pages/Index'
import PrivateRoute from './components/PrivateRoute'

export default class IRouter extends React.Component {
	render() {
		return (
			<HashRouter>
				<Provider {...store}>
					<App>
						<Switch>
							<Route path="/login" component={Login}></Route>
							<PrivateRoute path='/' component={Index}/>
						</Switch>
					</App>
				</Provider>
			</HashRouter>
		)
	}
}