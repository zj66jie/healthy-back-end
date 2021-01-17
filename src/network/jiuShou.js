import {request} from './request'

request({
  url:'/home/multidata' //传入confing,在baseURL后面的值
}).then(res=>{
 console.log(res); //res中含有请求的data等数据
}).catch(err=>{
  console.log(err);
})
