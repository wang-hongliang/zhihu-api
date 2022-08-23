const mongoose = require("mongoose")

const {
  Schema,
  model
} = mongoose

const questionSchema = new Schema({
  __v: {
    type: Number,
    select: false // 是否返回
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    select: true
  },
  questioner: {
    type: Schema.Types.ObjectId,
    ref:"User",
    require:true,
    select: false
  },
  topics:{
    type:[{
      type: Schema.Types.ObjectId,
      ref:"Topic",
    }],
    select:false
  }
})

module.exports = model('Question', questionSchema)