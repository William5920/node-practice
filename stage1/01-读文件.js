var fs = require('fs');

fs.readFile('测试文件.md',function(error,data){
	console.log(data.toString());
});