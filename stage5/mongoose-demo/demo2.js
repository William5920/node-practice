var mongoose = require('mongoose')

var Schema = mongoose.Schema

//1.连接数据库
//制定连接的数据库不需要存在，当你插入第一条数据后就会被自动创建出来
mongoose.connect('mongodb://localhost:27017/itcast')

//2.设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//值
//约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
	username: {
		type: String,
		required: true//必须有
	},
	password: {
		type: String,
		required: true//必须有
	},
	email: {
		type: String
	}
})

//3.将文档结构发布为模型
//	mongoose.model 方法就是用来讲一个架构发布为model
//	第一个参数传入一个首字母大写的单数字符串用来表示数据库的名称
//	第二个参数为架构Schema
//	返回值：模型构造函数
var User = mongoose.model('User',userSchema)

//4.当我们有了模型构造函数之后，就可以对users集合中的数据进行操作了

/**********新增数据**************/
// var admin = new User({
// 	username: 'peking',
// 	password: '10000',
// 	email: 'admin@admin.com'
// })

// admin.save(function(err,rslt){
// 	if(err){
// 		console.log('保存失败！')
// 	} else {
// 		console.log('保存成功！')
// 		console.log(rslt)
// 	}
// })

/**********查询数据**************/

//查询所有
User.find(function(err,rslt){
	if(err){
		console.log('查询失败！')
	} else {
		console.log(rslt)
	}
})

//按条件查询,第一个参数为条件
// User.find({ username: 'william' }, function(err,rslt){
// 	if(err){
// 		console.log('查询失败！')
// 	} else {
// 		console.log(rslt)
// 	}
// })

//按条件查询单个
// User.findOne({ username: 'william' }, function(err,rslt){
// 	if(err){
// 		console.log('查询失败！')
// 	} else {
// 		console.log(rslt)
// 	}
// })

/**********删除数据**************/
// User.remove({ username: 'admin' }, function(err,rslt){
// 	if(err){
// 		console.log('删除失败！')
// 	} else {
// 		console.log(rslt)
// 	}
// })

/**********更新数据**************/
// User.updateOne({ id: '5d00f0b57ab78566a6d75336' }, { password: 'myschool' }, function(err,res){
// 	if(err){
// 		console.log('更新失败！')
// 	} else {
// 		console.log('更新成功！')
// 	}
// })









