
var http = require('http');
var fs = require('fs');
var template = require('art-template');

var server = http.createServer();

var wwwDir = '/Users/bytedance/Desktop/study/blackHorse/nodejs-apache';

server.on('request',function(req,res){
	var url = req.url;

	var filePath = '/index.html';
	if(url !== '/') {
		filePath = url;
	}

	
	fs.readFile(wwwDir + filePath,function(err,data){
		if(err) {
			res.end('404,Not Found');
			return;
		}

		//使用模版引擎渲染页面（服务端渲染）
		fs.readdir(wwwDir,function(err,files){
			if(err) {
				return res.end('Can not find wwwDir!');
			}

			// console.log(files);
			var htmlStr = template.render(data.toString(),{files:files});
			res.end(htmlStr);
		});

		
		console.log(data.toString());
	})
	
})

server.listen(3000,function(){
	console.log('Server is running...');
})