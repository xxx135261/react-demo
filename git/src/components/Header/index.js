import React from 'react'
import './index.less'
import {Row,Col} from 'antd'
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
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
												<a href=" ">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date"></span>
                    </Col>
                </Row>
            </div>
        )
    }
}