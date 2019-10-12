var express = require('express');

var app = express();

app.use('/public/',express.static('./public/'));

app.get('/',function(req,res){
	res.send('home page');
})

app.get('/login',function(req,res){
	res.send('利用nodemon执行js文件');
})

app.listen(3000,function(){
	console.log('Express app is running...');
})