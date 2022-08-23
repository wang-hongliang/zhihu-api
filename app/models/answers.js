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
  answer: {
    type: Schema.Types.ObjectId,
    ref:"User",
    require:true,
    select: false
  },
  questionId:{
    type:String,
    select:false
  }
})

module.exports = model('Answer', answerSchema)