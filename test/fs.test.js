'use strict'
var expect = require('chai').expect
var FS = require('../src/fs/index')

// 拷贝文件到指定目录
var copyFile = function(src, dist) {
    FS.writeFileSync(dist, FS.readFileSync(src))
}

describe('.commitlintrc.js是否创建', () => {
    it('.commitlintrc.js是否创建', () => {
        // 拷贝配置文件到项目根目录
        copyFile('.commitlintrc.js', 'dist/.commitlintrc.js')
        var isExist = FS.isFileExist('dist/.commitlintrc.js')
        expect(isExist).to.be.true
    })
})
