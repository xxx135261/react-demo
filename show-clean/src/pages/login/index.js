import React from 'react'
import {Form, Input, Button} from 'antd'
import Util from '../../utils/utils'
import './index.less'
const FormItem = Form.Item;

export default class Login extends React.Component {
    state = {};

    componentDidMount() {//每次进入登录页清除之前的登录信息
        
    }

    loginReq = (params) => {
        console.log(params);
        Util.setCookie("sessionId",params.username)
        window.location.href = '/#/admin/home';
    };

    render() {
        return (
            <div className="login-page">
                <div className="login-content-wrap">
                    <div className="login-content">
                        <div className="word"> <br /></div>
                        <div className="login-box">
                            <div className="error-msg-wrap">
                                <div
                                    className={this.state.errorMsg?"show":""}>
                                    {this.state.errorMsg}
                                </div>
                            </div>
                            <LoginFrom loginSubmit = {this.loginReq}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LoginFrom extends React.Component{
    loginSubmit = (e)=>{
        e && e.preventDefault()
        const _this = this
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                var formValue = _this.props.form.getFieldsValue()
                // console.log(formValue);
                this.props.loginSubmit(formValue)
            }
        })
        
    }
    checkUsername = (rule,value,callback)=>{
        var reg  = /^\w+$/
        if(!value){
            callback('请输入用户名')
        }else if(!reg.test(value)){
            callback('用户名只允许字母数字或者下划线')
        }else{
            callback()
        }
    }
    checkPassword = (rule,value,callback)=>{
        if(!value){
            callback('请输入密码')
        }else{
            callback()
        }
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <div>
                <Form className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator('username',{
                                initialValue:"admin",
                                rules:[{validator:this.checkUsername}]
                            })(
                                <Input placeholder="用户名"></Input>
                            )
                        }
                        
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password',{
                                initialValue:"admin",
                                rules:[{validator:this.checkPassword}]
                            })(
                                <Input type="password" placeholder="密码"></Input>
                            )
                        }
                        
                    </FormItem>
                    <FormItem>
                        <Button type="primary" className="login-form-button" onClick={this.loginSubmit}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


LoginFrom = Form.create({})(LoginFrom)
