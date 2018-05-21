/**
 * Created by laomao on 2018/3/31.
 */

import {netAdmin} from '../net'
import {Register} from 'apibus'
// let debug = require('debug')('app:api.admin')

@Register('admin')
export class Admin {
  /**
   * 获取当前登陆的用户信息
   * @returns {*}
   */
  getAdminInfo () {
    return netAdmin.getAdminInfo()
  }
}
