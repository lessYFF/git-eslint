'use strict'
var expect = require('chai').expect
var FS = require('../src/fs/index')

describe('.commitlintrc.js是否创建', () => {
    it('.commitlintrc.js是否创建', () => {
        // 拷贝配置文件到项目根目录
        FS.batchCopyFile(['.commitlintrc.js'], '../../', 'dist/')
        var isExist = FS.isFileExist('dist/.commitlintrc.js')
        expect(isExist).to.be.true
    })
})
