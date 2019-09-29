#!/usr/bin/env node
'use strict'
var __importStar =
    (this && this.__importStar) ||
    function(mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
        result['default'] = mod
        return result
    }
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
var fs = __importStar(require('fs'))
var path = __importStar(require('path'))
var index_1 = __importDefault(require('./fs/index'))
// 拷贝配置文件到项目根目录
index_1.default.batchCopyFile(['CHANGELOG.md', '.eslintrc.js', '.prettierrc.js', '.commitlintrc.js'], '../../')
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
//# sourceMappingURL=index.js.map
