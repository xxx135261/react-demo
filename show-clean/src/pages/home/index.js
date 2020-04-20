import React from 'react'
import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb'
import StoreItem from './StoreItem';
import { Row, Col } from 'antd';
// import UserStatus from "./userStatus"
// 注入了一个Hook：useState,一个有状态的组件
// useEffect：componentDidMount的功能
//useContext:context上下文的功能

// function Home(props) {
// 	const [count, setCount] = useState(0);
// 	// 类似于componentDidMount和componentDidUpdate:
// 	// 用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数（第一个参数）
// 	useEffect(()=>{
// 		document.title = `you clicked ${count} times`;
// 	},[count])

// 	// const isOnline = UserStatus(props.friend.id);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// useEffect怎么解绑一些副作用
// function Home(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // 一定注意下这个顺序：告诉react在下次重新渲染组件之后，同时是下次调用ChatAPI.subscribeToFriendStatus之前执行cleanup
//     return function cleanup() {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   },props.friend.id);

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }


@inject(['appStore'])  // 相当于 connect
@observer  // 包装成订阅者
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	componentWillMount(){
		document.title = `you clicked ${this.state.count} times`;
		this.props.appStore.reqStores();
	}
	componentDidUpdate(){
		document.title = `you clicked ${this.state.count} times`;
	}
	setCount = () => {
		this.setState({
			count:this.state.count+1
		})
	}
	render(){
		console.log(this.props.appStore.storesList)
		// const storeList = this.props.appStore.storesList
		return (
			<div>
				<CustomBreadcrumb arr={['基本','按钮']}/>
				<h3>you clicked {this.state.count} times</h3>
				<button onClick={this.setCount}>click me</button>
				<div className="list-wrap">
				共有{this.props.appStore.storesSize}条
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" justify="space-between">
					{
						this.props.appStore.storesList.map((item, k) => (
							<Col span={6} key={k}><StoreItem storeItem={item}></StoreItem></Col>
						))
					}
					</Row>
				</div>
			</div>
		)
	}
}

export default Home