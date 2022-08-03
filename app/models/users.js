const mongoose = require("mongoose")

const {
	Schema,
	model
} = mongoose

const userSchema = new Schema({
	__v:{
		type: Number,
		select:false
	},
	name: {
		type: String,
		require: true
	},
	password:{
		type: String,
		require: true,
		select: true // 是否返回
	}
})

module.exports = model('User',userSchema)