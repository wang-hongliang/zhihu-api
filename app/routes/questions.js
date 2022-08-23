const jwt = require("koa-jwt")
const Router = require('koa-router')
const router = new Router({
  prefix: '/questions'
})
const {
  find,
  findById,
  create,
  update,
  delete:del,
  checkQusetionExist,
  checkQuestioner
} = require("../controllers/questions")
const {
  secret
} = require('../config')

const auth = jwt({
  secret
})

router.get('/', find)
router.post('/',auth, create)
router.get('/:id',checkQusetionExist, findById)
router.patch('/:id', auth, checkQusetionExist,checkQuestioner, update) // put整体替换 patch部分替换
router.delete('/:id', auth, checkQusetionExist,checkQuestioner, del) 
module.exports = router