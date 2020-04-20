import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../../components/PrivateRoute'
import MenuConfig from '../../menuData/menuConfig'

@withRouter
class ContentMain extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			routerList:[]
		}
	}

	componentWillMount(){
		const routeList = this.renderRouteList(MenuConfig);
		this.setState({
			routeList
		})
	}
	renderRouteList = (data) => {
		const resultList = [];
		let mp = data => {
			data.map(item => {
				resultList.push(<PrivateRoute exact path={item.key} component={item.component} key={item.key}/>)
				if(item.children) mp(item.children) 
			})
		} 
		mp(data)
		return resultList
	}

  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
					{this.state.routeList}
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain