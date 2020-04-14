import React from 'react'
import { Select } from 'antd'
const Option = Select.Option;
export default {
    formateDate(time){
        if(!time) return '';
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth()+1)+'-'+date.getDate()+'  '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds() 
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            // showQuickJumper:true
        }
    },
    // 下拉框获取options
    getOptionList(data){
        if(!data){
            return [];
        }
				let options = [] //[<Option value="0" key="all_key">全部</Option>];
        // eslint-disable-next-line array-callback-return
        data.map((item)=>{
					options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
    // 设置coolkie
    setCookie(name,value)
    {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();

    },
    //读取cookies
    getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    
        if(arr === document.cookie.match(reg))
    
            return (arr[2]);
        else
            return null;
    },
    // 删除cookie
    delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=this.getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    },
}