import {request} from './request'

export function getHomeMultidata(){
 return request({
    url:'/home/multidata' //传入confing,在baseURL后面的值
  })
  
}
 
