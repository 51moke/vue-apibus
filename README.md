# vue  apibus
###### 本项目使用vue-cli生成，添加了service目录，试图把服务业务代码和视图（vue）独立开来，通过apibus来搭桥

#### 1、[点击查看apibus用法](https://github.com/51moke/apibus)
#### 2、service结构说明：
```
   api (存放所有api模型，每个js文件就是一个api模型)
      index.js  (api入口文件，所有api模型文件都要import到index.js文件里)
      admin.js  (后台api模型)
      login.js  (登录api模型)
      ...       (更多的api模型)
   net (存放所有访问远程js文件，每个js一个模型，访问远程的业务都在这里面写，提供api服务业务使用)
      exec
         ExecAsyncWeb.js  (执行远程接口文件)
         index.js         (选择执行远程接口入口)
      index.js  (net入口文件，所有net模型文件都要import到index.js文件里)
      admin.js  (后台接口模型)
      login.js  (登录接口模型)
      ...       (更多的接口模型)
   index.js    （service入口文件）
   config.js    (配置文件，接口网关等配置信息)
   intercept.js (拦截器文件)

```




## Build Setup

``` bash
# install dependencies
npm install
or
yarn

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
