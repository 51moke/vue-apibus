/**
 * Created by laomao on 2018/3/31.
 */
let debug = require('debug')('app:demo')
import apibus,{Register} from 'apibus'

@Register('demo')
class demo {
  login(userid, password) {
    if (userid == 'admin' && password == 'admin') {
      return true;
    }
    return Promise.reject(false);
  }
}

//注册代理接口
apibus.Register('proxyService')((name)=> {

  //对auth单独处理
  if (name == 'auth') {
    return (...args)=> {
      return 'auth';
    }
  }
  //对getName单独处理
  if (name == 'getName') {
    return (...args)=> {
      return 'getName';
    }
  }
  //...

  //如果想让proxyService服务有无限方法，可以返回一个通用的（这部是可选）
  return (...args)=> {
    return '通用的proxyService服务->执行了:api.proxyService.' + name;
  }

}, true)
