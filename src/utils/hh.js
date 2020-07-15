import axios from "axios"
import { Guid } from "./guid"
// 获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString('D');
    localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;
// console.log(ID)
// axios.defaults.baseURL = 'http://120.53.31.103:84';

// 请求拦截器
axios.interceptors.request.use(function(res){
    res.headers = {
        DeviceID:ID,
        DeviceType:"H5"
    }
   let adminToken =  localStorage.getItem("token")
   if(adminToken){
       res.headers.Authorization = `Bearer ${adminToken}`
   }
    return res;
}),function(error){
    return Promise.reject(error)
}

export default axios