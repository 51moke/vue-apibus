
# restful格式规范

### 格式说明：
```
{"status_code": "状态码","code": "字典码","description": "描述","payload":"正确返回数据"}
```
### 正确返回：
```
{"status_code": 0,"payload": "正确返回的数据"}
```
### 错误返回：
```
{"status_code": 1,"code": "字典码","description": "错误描述"}
```
## 实例：
### 列表demo：
```
{
  "status_code": 0,
  "payload": {
    "itemList": [
      {
        "id": 1,
        "name": "张三"
      },
      {
        "id": 2,
        "name": "李四"
      },
      {
        "id": 3,
        "name": "王五"
      }
    ]
  }
}

```
### 列表demo（带分页）：
```
{
  "status_code": 0,
  "payload": {
    "itemList": [
      {
        "id": 1,
        "name": "张三"
      },
      {
        "id": 2,
        "name": "李四"
      },
      {
        "id": 3,
        "name": "王五"
      },
      {
        "id": 4,
        "name": "张三"
      },
      {
        "id": 5,
        "name": "李四"
      },
      {
        "id": 6,
        "name": "王五"
      },
      {
        "id": 7,
        "name": "张三"
      },
      {
        "id": 8,
        "name": "李四"
      },
      {
        "id": 9,
        "name": "王五"
      },
      {
        "id": 10,
        "name": "张三"
      }
    ],
    "itemListSize": 10,
    "currentPage": 1,
    "pageSize": 5,
    "maxPage": 100
  }
}

```
###### 分页说明:
|参数名|参数类别|说明|
| :-------------- | :-------------- | :-------------- |
|itemList|list|元素列表|
|itemListSize|number|元素列表个数|
|currentPage|number|当前页码|
|pageSize|number|单页需求尺寸|
|maxPage|number|最大页码|
