/**
 * Created by laomao on 2018/3/31.
 */
import {ExecAsync} from './exec'

export default new class {
  // 获取当前管理员信息
  getAdminInfo () {
    return ExecAsync('sys.admin.getAdminInfo')
  }
}()

// export default new Admin()
