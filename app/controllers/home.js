const path = require('path')
class HomeCtl {
  index(ctx){
    ctx.body = "<h1>这是主页</h1>"
  }
  upload(ctx){
    const file = ctx.request.files.file
    console.log(file)
    const basename = path.basename(file.filepath)
    ctx.body = {
      url: `${ctx.origin}/uploads/${basename}`
    }
  }
}

module.exports = new HomeCtl()