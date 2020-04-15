import React from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class LoadingPage extends React.Component {
	// 页面的加载条
	componentWillMount(){
		NProgress.start()
	}
	componentDidMount(){
		NProgress.done()
	}
	render() {
		return <div></div>
	}
}

const LoadComponent = (component) => {
	return Loadable({
		loader:component,
		loading:() => <LoadingPage />
	})
}

export default LoadComponent