const jwt = require("koa-jwt")
const Router = require('koa-router')
const router = new Router({
  prefix: '/users'
})
const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
  checkOwner,
  listFollowing,
  listFollowers,
  checkUserExist,
  follow,
  unfollow,
  listFollowingTopics,
  followTopic,
  unfollowTopic,
  listQuestions
} = require("../controllers/users")
const {
  checkTopicExist
} = require("../controllers/topics")
const {
  secret
} = require('../config')

const auth = jwt({
  secret
})

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, checkOwner, update) // put整体替换 patch部分替换
router.delete('/:id', auth, checkOwner, del)
router.post('/login', login)
router.get('/:id/following', listFollowing)
router.get('/:id/followers', listFollowers)
router.put('/following/:id',auth,checkUserExist, follow)
router.delete('/following/:id',auth,checkUserExist, unfollow)
router.get('/:id/followingTopics', listFollowingTopics)
router.put('/followingTopics/:id',auth,checkTopicExist, followTopic)
router.delete('/followingTopics/:id',auth,checkTopicExist, unfollowTopic)
router.get('/:id/questions', listQuestions)

module.exports = router