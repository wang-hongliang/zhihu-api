const Router = require('koa-router')
const router = new Router({prefix:'/users'})
const {find,findById,create,update, delete:del} = require("../controllers/users")


router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', update) // put整体替换 patch部门替换
router.delete('/:id', del)

module.exports = router