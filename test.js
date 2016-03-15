var http_tools = require('./index');

var url = "https://www.baidu.com/";

console.log(http_tools.getProtocol(url));
console.log(http_tools.getHost(url));
console.log(http_tools.getPort(url));
console.log(http_tools.getPath(url));