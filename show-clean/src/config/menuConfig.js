import LoadComponent from '../utils/LoadComponent'
const menuList = [{
		title: '首页',
		key: '/home',
		icon: 'home',
		component:LoadComponent(()=>import('../pages/home'))
	},
	{
		title: '组件',
		icon: 'laptop',
		key: '/home/general',
		children: [{
				title: '按钮',
				key: '/home/general/button',
				component:LoadComponent(()=>import('../pages/general/button'))
			},
			{
				title: '图标',
				key: '/home/general/icon',
				icon:'laptop',
			}
		]
	},
	{
		title: '导航组件',
		icon: 'bars',
		key: '/home/navigation',
		children:[
			{key: '/home/navigation/dropdown', title: '下拉菜单',	component:LoadComponent(()=>import('../pages/Index'))},
      {key: '/home/navigation/menu', title: '导航菜单',	component:LoadComponent(()=>import('../pages/Index'))},
      {key: '/home/navigation/steps', title: '步骤条',	component:LoadComponent(()=>import('../pages/Index'))},
		]
	},
];
export default menuList;