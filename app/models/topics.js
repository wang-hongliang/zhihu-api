const mongoose = require("mongoose")

const {
  Schema,
  model
} = mongoose

const topicSchema = new Schema({
  __v: {
    type: Number,
    select: false // 是否返回
  },
  name: {
    type: String,
    require: true,
    select: true
  },
  avatar_url: {
    type: String,
    select: true
  },
  introduction: {
    type: String,
    select: true
  },
})

module.exports = model('Topic', topicSchema)