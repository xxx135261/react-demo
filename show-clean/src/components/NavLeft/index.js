import React from 'react'
import './index.less'
import MenuConfig from '../../menuData/menuConfig'
import { Menu, Input, Icon } from 'antd'
import { NavLink, withRouter} from 'react-router-dom'
const { SubMenu } = Menu

@withRouter
class NavLeft extends React.Component {
	state = {
		openKeys:[], //展开的子菜单项
		selectedKeys:[], //当前选中的项
	};
	componentWillReceiveProps(nextProps) {
		// 当点击面包屑导航时，侧边栏要同步响应
		const pathname = nextProps.location.pathname
		if(pathname !== this.props.location.pathname){
			this.setState({
				selectedKeys:[pathname]
			})
		}
	}
	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig)
		this.setState({
			menuTreeNode,
			current: 'admin/home',
		})
	}
	componentDidMount() {
		this.refresh();

	}
	// 页面刷新打开当前路由
	refresh = () => {
    const pathname = this.props.location.pathname
    //获取当前所在的目录层级
    const rank = pathname.split('/')
    switch (rank.length) {
      case 2 :  //一级目录
        this.setState({
          selectedKeys: [pathname]
        })
        break;
      case 5 : //三级目录，要展开两个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
        })
        break;
      default :
        this.setState({
          selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
    }
	}
	onOpenChange = (openKeys) => {
		// // 展开当前父级菜单（父级菜单下可能还有子菜单）
		if(openKeys.length === 0 || openKeys.length === 1){
			this.setState({
				openKeys
			})
			return
		}
		// 点击展开当前菜单
		const lastOpenKey = openKeys[openKeys.length - 1]
		if(lastOpenKey.includes(openKeys[0])) {
			this.setState({
				openKeys
			})
		}else{
			this.setState({
				openKeys:[lastOpenKey]
			})
		}
	}
	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu title={<span>{item.icon && <Icon type={item.icon}/>}<span>{item.title}</span></span>} key={item.key}>
						{
							this.renderMenu(item.children)
						}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item key={item.key} title={item.title}>
						<NavLink to={item.key}>{item.icon && <Icon type={item.icon} />}<span>{item.title}</span></NavLink>
					</Menu.Item>
				)
			}
		})
	}
	// 菜单渲染
	render() {
		const {selectedKeys,openKeys} = this.state;
		return (
			<div className="nav-left">
				<div className="logo">
					<Input placeholder="Basic usage" />
				</div>
				<Menu mode="inline" theme="dark" style={{height: '100vh',overflowY:'hidden'}}
					onOpenChange={this.onOpenChange}
					onClick={({key}) => this.setState({selectedKeys: [key]})}
					selectedKeys={selectedKeys}
					openKeys={openKeys}
				>
					{
						this.state.menuTreeNode
					}
				</Menu>
			</div>
		)
	}
}

export default NavLeft