import Mock from 'mockjs'
const baseUrl = 'http://localhost:8000/'
const Random = Mock.Random;
const tokens = [
  '0x8546846545411589', '0x3246846551254863', 
  '0x8984615648463482', '0x4684885313548655',
  '0x8787524386123231', '0x8798143213546631'
]
const storenames = [
  'COCO厨房', '绝世炒饭', '今晚吃鸡', '德克士', '黄焖鸡米饭', '华莱士', '神户牛排饭', '无骨鱼饭', '王者炒饭'
]
const storecals = [
  '炒饭', '其他快餐', '盖浇饭', '焗饭', '炸鸡', '黄焖鸡米饭'
]

Random.extend({
	token: function() {
    return this.pick(tokens);
  },
  storecal: function() {
    return this.pick(storecals)
	},
})


/**
 * 登录接口
 * 默认用户名 admin 密码 admin
 */
Mock.mock(`${baseUrl}login`, 'post', (options) => {
	const { username, password } = JSON.parse(options.body)
  if(username === 'admin' && password === 'admin') {
    return {
      token: Random.token(),
      status: 200
    }
  }else {
    return {
      token: '',
      status: 400
    }
  }
})
/**
 * 获取商店接口
 */
Mock.mock(`${baseUrl}stores`, (options) => {
  let res = [];
  for(let i = 0;i < 9;i++) {
    let obj = {
      id: i + 1,
      storename: storenames[i],
			storerate: Random.integer(1,5),
			storeimg:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' || Random.image('200x100', '#4A7BF7', 'Hello'),
      storefee: Random.city(),
      storetime: Random.time(),
      storecal: Random.storecal(),
      storeintro: Random.csentence()   
    }
    res.push(obj);
  }
  return res
})