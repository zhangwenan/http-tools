# util
自己常用的一些方法


# Usage

```javascript
var http_tools = require('http-tools');
var url = "https://www.baidu.com/test";
console.log(http_tools.getProtocol(url));
console.log(http_tools.getHost(url));
console.log(http_tools.getPort(url));
console.log(http_tools.getPath(url));
```