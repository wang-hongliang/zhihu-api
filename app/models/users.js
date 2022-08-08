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
      type: String,
      select: true
    }]
  },
  bussiness: {
    type: String,
    select: true
  },
  employments: {
    type: [{
      compang: {
        type: String
      },
      job: {
        type: String
      }
    }],
    select: true
  },
  educations: {
    type: [{
      school: {
        type: String
      },
      major: {
        type: String
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
  }
})

module.exports = model('User', userSchema)