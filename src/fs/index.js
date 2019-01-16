'use strict'
var fs = require('fs')
var path = require('path')

var FS = {
    // 同步读取文件封装
    readFileSync(arg) {
        return fs.readFileSync(path.resolve(arg), function(err) {
            if (err) {
                console.error(err)
                return
            }
        })
    },
    // 同步写入文件封装
    writeFileSync(...arg) {
        // 已存在则不写入
        if (this.isFileExist(arg[0])) return

        fs.writeFileSync(path.resolve(arg[0]), arg[1], 'utf8', function(err) {
            if (err) {
                console.error(err)
                return
            }
        })
    },
    // 检查文件是否存在
    isFileExist(arg) {
        return fs.existsSync(path.resolve(arg))
    },
}

module.exports = FS
