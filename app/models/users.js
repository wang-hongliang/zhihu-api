const mongoose = require("mongoose")

const {
  Schema,
  model
} = mongoose

const userSchema = new Schema({
  __v: {
    type: Number,
    select: false // 是否返回
  },
  name: {
    type: String,
    require: true,
    select: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  avatar_url: {
    type: String,
    select: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male',
    require: true,
    select: true
  },
  headline: {
    type: String,
    select: true
  },
  locations: {
    type: [{
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
      }],
      select: true
    }]
  },
  bussiness: {
    type: Schema.Types.ObjectId,
    ref: 'Topic',
    select: true
  },
  employments: {
    type: [{
      compang: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      },
      job: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      }
    }],
    select: true
  },
  educations: {
    type: [{
      school: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      },
      major: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      },
      diploma: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
      },
      entrance_year: {
        type: Number
      },
      graduation_year: {
        type: Number
      }
    }],
    select: true
  },
  following: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    select: true
  },
  followingTopics: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    }],
    select: true
  },
  likingAnswers: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }],
    select: true
  },
  dislikingAnswers: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }],
    select: true
  },
  collectingAnswers: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Answer'
    }],
    select: true
  },
},{timestamps:true})

module.exports = model('User', userSchema)