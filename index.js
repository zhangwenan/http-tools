var http = require('http');
var https = require('https');


var tools = {
  getProtocol: function(url){
    return url.substring(0,url.indexOf(":")) === 'https' ? https : http;
  },

  getPort: function(url) {
    var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
    var domain = url.match(hostPattern);

    var pos = domain[1].indexOf(":");
    if(pos !== -1) {
      domain[1] = domain[1].substr(pos + 1);
      return parseInt(domain[1]);
    } else if(url.toLowerCase().substr(0, 5) === "https") return 443;
    else return 80;
  },

  //Parse the url,get the host name
  //e.g. http://www.google.com/path/another -> www.google.com
  getHost: function(url){
    var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
    var domain = url.match(hostPattern);

    var pos = domain[1].indexOf(":");
    if(pos !== -1) {
      domain[1] = domain[1].substring(0, pos);
    }
    return domain[1];
  },

  //Parse the url,get the path
  //e.g. http://www.google.com/path/another -> /path/another
  getPath: function(url){
    var pathPattern = /\w+:\/\/([^\/]+)(\/.+)(\/$)?/i;
    var fullPath = url.match(pathPattern);
    return fullPath?fullPath[2]:'/';
  }
};

module.exports = tools;