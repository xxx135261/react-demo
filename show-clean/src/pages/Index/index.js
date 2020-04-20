import React from 'react'
import {Layout} from 'antd'
import NavLeft from '../../components/NavLeft'
import ContentMain from '../../components/contentMain'
import '../../style/common.less'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const {Sider, Content} = Layout
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			collapsed:false
		}
	}
	toggle = () => {
		this.setState({
			collapsed:!this.state.collapsed
		})
	}
	render(){
		return(
			<Layout id='page'>
				<Sider collapsible trigger={null}	collapsed={this.state.collapsed}>
					<NavLeft collapsed={this.state.collapsed}/>
				</Sider>
				<Layout>
					<Header collapsed={this.state.collapsed} onToggle={this.toggle}></Header>
					<Content>
						<ContentMain />
					</Content>
					<Footer></Footer>
				</Layout>
			</Layout>
		)
	}
}

export default Index