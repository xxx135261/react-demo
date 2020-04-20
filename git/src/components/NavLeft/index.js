import React from 'react'
import './index.less'
import MenuConfig from '../../config/menuConfig'
import { Menu, Input } from 'antd'
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu
export default class NavLeft extends React.Component {
	state = {};
	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig)
		this.setState({
			menuTreeNode,
			current: 'admin/home',
		})
	}
	renderMenu = (data) => {

		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{
							this.renderMenu(item.children)
						}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item key={item.key} title={item.title}>
						<NavLink to={item.key}>{item.title}</NavLink>
					</Menu.Item>
				)
			}
		})
	}
	// 菜单渲染
	render() {
		return (
			<div>
				<div className="logo">
					<Input placeholder="Basic usage" />
				</div>
				<Menu mode="inline" theme="dark">
					{
						this.state.menuTreeNode
					}
				</Menu>
			</div>
		)
	}
}