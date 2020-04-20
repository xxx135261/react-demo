import axios from '../axios'

/** 
 * 登录
*/
export const login = (data) => {
  return axios.request({
    url: `login`,
    method: 'post',
    data
  })
}

/** 
 * 获取商店列表
*/
export const stores = () => {
  return axios.request({
    url: `stores`
  })
}