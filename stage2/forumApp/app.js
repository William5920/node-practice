var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');


var comments = [
	{
		name:'张三1',
		message:'今天是个好日子！',
		data:'2019-06-07'
	},
	{
		name:'张三2',
		message:'今天是个好日子！',
		data:'2019-06-07'
	},
	{
		name:'张三3',
		message:'今天是个好日子！',
		data:'2019-06-07'
	},
	{
		name:'张三4',
		message:'今天是个好日子！',
		data:'2019-06-07'
	},
	{
		name:'张三5',
		message:'今天是个好日子！',
		data:'2019-06-07'
	},

	{
		name:'张三6',
		message:'今天是个好日子！',
		data:'2019-06-07'
	}
];

http
	.createServer(function(req,res){//简写方式，该函数会直接被注册为server的request
		//将路径解析为一个对象
		var parseObj = url.parse(req.url,true);
		//单独获取查询路径，不包含查询字符串
		var pathname = parseObj.pathname;

		if(pathname === '/'){
			fs.readFile('./views/index.html',function(err,data){
				if(err) {
					return res.end('404,Not found!');
				}

				var htmlStr = template.render(data.toString(),{
					comments:comments
				})
				res.end(htmlStr);
			})
		} else if(pathname === '/post'){
			fs.readFile('./views/post.html',function(err,data){
				if(err) {
					return res.end('404,Not found!');
				}
				res.end(data);
			})

		} else if(pathname.indexOf('/public/') === 0) {
			fs.readFile('.' + pathname,function(err,data){
				if(err) {
					return res.end('404,Not found!');
				}
				res.end(data);
			})
		} else if(pathname === '/comment'){
			console.log('收到表单请求了！',parseObj);

			var comment = parseObj.query;
			comment.data = '2019-06-06 16:25';
			comments.unshift(comment);

			res.statusCode = 302;
			res.setHeader('Location','/');
			res.end();

		} else {
			//其他url都处理成找不到文件
			fs.readFile('./views/404.html',function(err,data){
				if(err) {
					return res.end('404,Not found!');
				}
				console.log(url);
				res.end(data);
			})
		}
	})
	.listen(3000,function(){
		console.log('Server is running...');
	})