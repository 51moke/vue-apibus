/**
 * Created by laomao on 2018/3/31.
 */
let debug = require('debug')('app:api.admin')
import {netAdmin} from '../net'
import {Register} from 'apibus'

@Register('admin')
class admin {
  /**
   * 获取当前登陆的用户信息
   * @returns {*}
   */
  getAdminInfo() {
    return netAdmin.getAdminInfo()
  }

}
