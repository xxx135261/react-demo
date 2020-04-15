import React from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import BGParticle from '../../utils/BGParticle' //首次加载动画
import Loading2 from '../../components/Loading2'
import { Form, Input, Button } from 'antd'
import './index.less'

const FormItem = Form.Item;
// import LoginForm from './LoginForm'

const url = 'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true'

@withRouter @inject(['appStore']) @observer
class Login extends React.Component {
	state = {
		loading: false
	};

	componentDidMount() {//每次进入登录页清除之前的登录信息
		this.initPage()
	}

	componentWillMount() {
		this.particle && this.particle.destory()
	}

	//载入页面时的一些处理
	initPage = () => {
		this.setState({
			loading: true
		})
		// this.props.appStore.initUsers()
		this.loadImageAsync(url).then(url => {
			this.setState({
				loading: false,
				url
			})
		}).then(() => {
			//为什么写在then里？id为backgroundBox的DOM元素是在loading为false时才有，而上面的setState是异步的，必须等到setState执行完成后才去获取dom
			this.particle = new BGParticle('login_bgimg')
			this.particle.init()
		})
	}

	//登录的背景图太大，等载入完后再显示，实际上是图片预加载，
	loadImageAsync(url) {
		return new Promise(function (resolve, reject) {
			const image = new Image();
			image.onload = function () {
				resolve(url);
			};
			image.onerror = function () {
				console.log('图片载入错误')
				resolve(url);
			};
			image.src = url;
		});
	}

	loginReq = (params) => {
		console.log(params);
		this.props.appStore.toggleLogin(true, {username: params.username}) //调用mobx appstore中的toggleLogin方法

		const {from} = {from: {pathname: '/'}}
		this.props.history.push(from)
	};
	render() {
		const { loading } = this.state
		return (
			<div className="login-page">
				{	loading ?
					<div>
						<h3 className='loadingTitle animated bounceInLeft'>载入中...</h3>
						<Loading2/>
					</div>
					:
					<div className="login-content-wrap" id="login_bgimg">
						 <LoginFrom loginSubmit = {this.loginReq}/>
					</div>
				}
			</div>
		)
	}
}

class LoginFrom extends React.Component {
	loginSubmit = (e) => {
		e && e.preventDefault()
		const _this = this
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				var formValue = _this.props.form.getFieldsValue()
				// console.log(formValue);
				this.props.loginSubmit(formValue)
			}
		})

	}
	checkUsername = (rule, value, callback) => {
		var reg = /^\w+$/
		if (!value) {
			callback('请输入用户名')
		} else if (!reg.test(value)) {
			callback('用户名只允许字母数字或者下划线')
		} else {
			callback()
		}
	}
	checkPassword = (rule, value, callback) => {
		if (!value) {
			callback('请输入密码')
		} else {
			callback()
		}
	}
	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className="login-form">
				<Form>
					<FormItem>
						{
							getFieldDecorator('username', {
								initialValue: "admin",
								rules: [{ validator: this.checkUsername }]
							})(
								<Input placeholder="用户名"></Input>
							)
						}

					</FormItem>
					<FormItem>
						{
							getFieldDecorator('password', {
								initialValue: "admin",
								rules: [{ validator: this.checkPassword }]
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

export default Login

