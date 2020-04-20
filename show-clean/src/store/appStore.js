import {observable, action,computed, runInAction} from 'mobx'
import {isAuth,authenticateSuccess,logout} from "../utils/session"
import {login, stores} from '../api/index';

class AppStore {
  @observable isLogin = !!isAuth()  //利用cookie来判断用户是否登录，避免刷新页面后登录状态丢失
  @observable users = []  //模拟用户数据库
	@observable loginUser = {}  //当前登录用户信息
	@observable storesList = []
	// 计算属性  计算 list.size
  @computed
  get storesSize() {
    return this.storesList.length
	}
	
  @action toggleLogin(flag,info={}) {
    this.loginUser = info  //设置登录用户信息
    if (flag) {
			login(info).then(res => {
				if(res.status === 200){
					authenticateSuccess(info.username)
      		this.isLogin = true
				}
			})
    } else {
      logout()
      this.isLogin = false
    }

  }
  @action initUsers() {
    const localUsers = localStorage['users']?JSON.parse(localStorage['users']):[]
    this.users = [{username: 'admin', password: 'admin'},...localUsers]
	}
	
	// @action reqStores() {
	// 	stores().then(res => {
	// 		console.log(res)
	// 		this.storesList = [...res]
	// 	})
	// }

	@action reqStores = async() => {
		const data = await stores()
		runInAction("说明一下这个action是干什么的。不写也可以",()=>{
			this.storesList = data
		})
	}
}

export default new AppStore()