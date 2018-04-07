/**
 * Created by laomao on 2018/4/7.
 */
let debug = require('debug')('app:api.login')
import {netLogin} from '../net'
import {Register} from 'apibus'

@Register('login')
class login {

  /**
   * 登陆认证
   * @param data
   */
  checkAuth(data) {
    return netLogin.checkAuth(data)
  }

  /**
   * 登出
   * @returns {*}
   */
  logout() {
    return netLogin.logout();
  }

}
