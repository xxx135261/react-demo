import React from 'react'
import './index.less'
import {Row,Col,Icon} from 'antd'
export default class Header extends React.Component{
    state={
        userName:'',
        sysTime:'',
        dayPictureUrl:'',
        weather:''
    }
    componentWillMount(){
        this.setState({
            userName:'Chris'
        })
		}
		
		toggle = () => {
			this.props.onToggle()
		}
    render(){
			const {collapsed} = this.props
			return(
					<div className="header">
						<Row className="header-top">
							<Col span={4}>
							<Icon
								type={collapsed ? 'menu-unfold' : 'menu-fold'}
								className='trigger'
								onClick={this.toggle}/>
							</Col>
							<Col span={20}>
									<span>欢迎，{this.state.userName}</span>
									<a href=" ">退出</a>
							</Col>
						</Row>
					</div>
			)
    }
}