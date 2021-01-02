var mongoose = require('mongoose')

//链接数据库
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var Schema = mongoose.Schema

var userSchema  = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created_time: {
		type: Date,
		//注意：这里不要写Date.now()，因为会即时调用
		//这里直接给了一个方法
		//当你去 new model 的时候，如果你没有传递create_time ,则mongoose就会调用default指定的Date.now方法
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: './public/img/avatar-default.png'
	},
	bio: {
		type: String,
		default: ''
	},
	gender: {
		type: Number,
		enum: [ -1, 0, 1 ],
		default: -1
	},
	birthday: {
		type: Date,
		
	},
	status: {
		type: Number,
		// 0 没有权限限制
		// 1 不可以评论
		// 2 不可以登录
		enum: [ 0, 1, 2 ],
		default: 0
	}	
})

module.exports = mongoose.model('User',userSchema)