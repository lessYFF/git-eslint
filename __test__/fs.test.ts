import * as fs from 'fs'
import * as path from 'path'
import FS from '../src/fs/index'

describe('unit test:fs ', () => {
    test('.commitlintrc.js是否创建', () => {
        // 拷贝配置文件到项目根目录
        fs.mkdirSync(path.join(__dirname, '../dist/'), { recursive: true })
        FS.batchCopyFile(['.commitlintrc.js'], '../../', path.join(__dirname, '../dist/'))
        var isExist = FS.isFileExist(path.join(__dirname, '../dist/.commitlintrc.js'))
        expect(isExist).toBeTruthy
    })
})
