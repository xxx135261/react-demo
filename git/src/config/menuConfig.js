
const menuList = [
    {
        title:'首页',
        key:'/admin/home',
    },
    {
        title:'表单',
        key:'/admin/form',
        children:[
            {
                title:'登录',
                key:'/admin/form/login',
            },
            {
                title:'注册',
                key:'/admin/form/resgister',
            }
        ]
    },
    {
        title:'评论管理',
        key:'/admin/comment'
    },
];
export default menuList;