const mongoose = require("mongoose")

const {
  Schema,
  model
} = mongoose

const commentSchema = new Schema({
  __v: {
    type: Number,
    select: false // 是否返回
  },
  content: {
    type: String,
    require: true,
  },
  commentator: {
    type: Schema.Types.ObjectId,
    ref:"User",
    require:true,
    select: false
  },
  questionId:{
    type:String,
    require:true
  },
  answerId:{
    type:String,
    require:true,
  },
  rootCommentId:{
    type:String,
  },
  replyTo:{
    type: Schema.Types.ObjectId,
    ref:"User",
  }
},{timestamps:true})

module.exports = model('Comment', commentSchema)