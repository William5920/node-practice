
var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
	console.log('请求路径是' + req.url);

	var url = req.url;

	if(url === '/'){
		res.end('index page!');
	} else if(url === '/login'){
		res.end('login page!');
	} else {
		res.end('404 NOT FOUND!');
	}

	
});

server.listen(3000,function(){
	console.log('服务器启动成功！');
})