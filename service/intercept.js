let debug = require('debug')('app:intercept')
import apibus from 'apibus'

let _number = 0;
//api开始log
apibus.use((promise, apiInfo)=> {
  _number++;
  apiInfo._number = _number;
  return promise
    .then(res=> {
      debug("%s、exec api start success %s param %o", apiInfo._number, apiInfo.name, res);
      return res;
    })
    .catch(err=> {
      debug("%s、exec api start error %s param %o", apiInfo._number, apiInfo.name, err);
      return Promise.reject(err);
    })
})


//api结束log
apibus.res((promise, apiInfo)=> {
  return promise
    .then(res=> {
      if (res.status_code == 1) {
        return Promise.reject(res);
      }
      debug("%s、exec api end success %s restful %o", apiInfo._number, apiInfo.name, res);
      return res;
    })
    .catch(err=> {
      debug("%s、exec api end error %s restful %o", apiInfo._number, apiInfo.name, err);
      return Promise.reject(err);
    })
})
