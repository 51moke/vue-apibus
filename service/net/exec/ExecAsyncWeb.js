/**
 * Created by laomao on 2018/3/31.
 */
let debug = require('debug')('app:net:web')
import {netApi} from '../../config'

/**
 * 异步执行web模式接口方法
 * @param name
 * @param data
 * @returns {Promise.<T>}
 * @constructor
 */
export let ExecAsyncWeb = (name, data = {}) => {
  debug("invoke metho %s with data %o", name, data);
  return ExecApi(name, data);
};

/**
 * 执行接口
 * @param Api
 * @param data
 * @returns {Promise.<T>}
 * @constructor
 */
const ExecApi = (Api, data = {body: {}}) => {

  data = Object.assign({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Api,
    },
    credentials: 'include', //发送cookie，保证多次请求cookieid一致
    method: "get",
    body: {},
  }, data);

  let method = data.method.toLowerCase();
  let apiname = "";
  if (method == 'post') {
    data.body = JSON.stringify(data.body);
  } else if (method == 'get') {
    let args = "";
    for (let i in data.body) {
      args += i + '=' + data.body[i] + '&'
    }
    if (args) {
      apiname += '?' + args;
    }
    delete data.body;
  }
  //console.log('data', data, netApi.host + apiname)
  return fetch(netApi.host + apiname, data)
    .then(response => response.json())
    .catch(err=> {
      return Promise.reject(err);
    });
}
