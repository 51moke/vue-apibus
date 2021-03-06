/**
 * Created by laomao on 2018/4/7.
 */
import {ExecAsync} from './exec'

export default new class {
  // 登陆认证
  checkAuth (data) {
    return ExecAsync('sys.login.checkAuth', {method: 'post', body: data})
  }

  // 登出
  logout () {
    return ExecAsync('sys.login.logout')
  }
}()
