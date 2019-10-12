//0.安装
//1.引包
var express = require('express');

//2.创建服务器应用程序
//	也就是原来的http.createServer()
var app = express();

//公开指定目录
//只要这样做了，你就可以直接通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/',express.static('./public/'));
app.use('/static/',express.static('./static/'));

//当服务器器收到get请求'/'时，执行回调处理函数
app.get('/',function(req,res){
	res.send('hello,express!');
})

app.get('/about',function(req,res){
	//在express中可以直接使用req.query来获取查询字符串参数
	console.log(req.query);
	res.send('你好，我是express!');
})

//相当于server.listen
app.listen(3000,function(){
	console.log('app is running at port 3000.')
})