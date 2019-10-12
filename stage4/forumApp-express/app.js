var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/public/',express.static('./public/'))

//配置使用art-template模版引擎
//第一个参数表示，当渲染以.art结尾的文件时，使用art-template模版引擎
app.engine('html', require('express-art-template'))

//配置body-parser，用于解析post请求的数据主体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



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

app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments
	});
})

app.get('/post',function(req,res){
	res.render('post.html');
})

app.post('/post',function(req,res){
	console.log(req.body)
	var comment = req.body
	comment.data = '2019-06-07 19:35:00'
	comments.unshift(comment)

	res.redirect('/')
})

app.listen(3000,function(){
	console.log('Forum app server is running...');
})