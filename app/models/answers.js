const mongoose = require("mongoose")

const {
  Schema,
  model
} = mongoose

const answerSchema = new Schema({
  __v: {
    type: Number,
    select: false // 是否返回
  },
  content: {
    type: String,
    require: true,
  },
  answerer: {
    type: Schema.Types.ObjectId,
    ref:"User",
    require:true,
    select: false
  },
  questionId:{
    type:String,
    require:true
  },
  voteCount:{
    type:Number,
    require:true,
    default: 0
  }
},{timestamps:true})

module.exports = model('Answer', answerSchema)