#!/usr/bin/env node
'use strict'
var fs = require('fs')
var path = require('path')
var FS = require('./fs/index')

// 拷贝配置文件到项目根目录
FS.batchCopyFile(['CHANGELOG.md', '.eslintrc.js', '.prettierrc.js', '.commitlintrc.js'])
// 将配置写入到根目录package.json
var packageJSON = require(path.resolve('package.json'))
Object.assign(packageJSON, {
    'lint-staged': {
        '*.{js,json,ts,css,md,vue,react}': ['prettier --write', 'git add'],
    },
    husky: {
        hooks: {
            'pre-commit': 'lint-staged',
            'commit-msg': 'commitlint -e $GIT_PARAMS',
        },
    },
    config: {
        commitizen: {
            path: 'cz-conventional-changelog',
        },
    },
})

fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2))
