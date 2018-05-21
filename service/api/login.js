/**
 * Created by laomao on 2018/4/7.
 */

import {netLogin} from '../net'
import {Register} from 'apibus'
// let debug = require('debug')('app:api.login')

@Register('login')
export class Login {
  /**
   * 登陆认证
   * @param data
   */
  checkAuth (data) {
    return netLogin.checkAuth(data)
  }

  /**
   * 登出
   * @returns {*}
   */
  logout () {
    return netLogin.logout()
  }
}

// console.log(Login)
