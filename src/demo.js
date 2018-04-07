/**
 * Created by laomao on 2018/3/31.
 */
import {api} from 'apibus'

api.login.checkAuth({userid: 'admin', password: 'admin'})
  .then((res) => {
    console.log('登陆成功', res)
  })
  .then(() => api.admin.getAdminInfo().then(info => {
    console.log('用户信息', info)
  }))
  .then(() => api.login.logout().then(res => {
    console.log('登出成功', res)
  }))
  .catch((err) => {
    console.log('登陆失败', err)
  })

/* 
 //代理接口
 api.proxyService.aaa(33, 44, 66)
 .then(res=> {
 console.log('代理请求测试', res)
 })
 .catch(err=> {
 console.log('代理异常处理', err)
 })
 */
