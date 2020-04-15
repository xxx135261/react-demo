import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute'
import MenuConfig from '../../config/menuConfig'


@withRouter
class ContentMain extends React.Component {

  render () {
		const routeData = MenuConfig;
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
					{routeData.map((item) => {
						return <PrivateRoute exact path={item.key} component={item.component} key={item.key} />
					})}
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain