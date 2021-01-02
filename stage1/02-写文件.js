var fs = require('fs');

fs.writeFile('./测试文件.md','我成功写入文件了,哈哈哈！',function(error){
	console.log('文件写入成功,哈哈哈！');
})