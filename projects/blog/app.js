var express = require('express')
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()



app.use('/public',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')))

//配置express-art-template
app.engine('html',require('express-art-template'))
//设置模版引擎找页面文件的默认路径,默认去名字为views的文件夹中寻找
app.set('views',path.join(__dirname,'./views'))

// app.get('/',function(req,res){
// 	res.render('index.html')
// })

//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

//配置session，一定要在路由之前
app.use(session({
  secret: 'itcast',//配置加密字符串，他会在原有加密基础之上和这个字符串拼起来去加密
  resave: false,
  saveUninitialized: true//无论你是否使用session，我都默认给你分配一把钥匙
}))



//把路由挂载到app中
app.use(router)

//配置一个处理404的中间件
app.use(function(req,res){
	res.render('404.html')
})

//配置一个全局错误处理中间件
app.use(function(err,req,res,next){
	res.status(500).json({
		err_code: 500,
		message: err.message
	})
})

app.listen(3000,function(){
	console.log('Blog app server is running at port 3000...')
})