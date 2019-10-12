
// 1.加载http核心模块
var http = require('http');

// 2.使用http.createServer()创建一个web服务器
// 返回一个server实例
var server = http.createServer();

// 3.服务器要干嘛？
// 提供服务，对数据的服务
// 发请求
// 接受请求
// 处理请求
// 给个反馈（发送响应）
// 注册request请求事件
// 当客户端请求过来，就会自动触发request请求事件，然后执行第二个参数：回调处理


// request 请求事件处理函数，需要接收2个参数
// request 请求对象
// 	请求对象可以用来获取客户端的一些请求信息，例如请求路径
// response 响应对象
// 	响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
	console.log('收到客户端请求了！请求路径是' + request.url);

	// response 有一个方法：write，可以用来给客户端发送数据
	// write可以使用多次，但最后一定要用end（）结束，否则客户端会一直等待
	response.write('hello');
	response.write(' nodeJs!');
	response.write('we have received client request,the request url is ' + request.url);

	//告诉客户端，我的话说完了，你可以呈递给客户了
	response.end();

})

// 4.绑定端口号，启动服务器
server.listen('3000',function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:300来进行访问！');
})