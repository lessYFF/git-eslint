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
Object.defineProperty(exports, '__esModule', { value: true })
var fs = __importStar(require('fs'))
var path = __importStar(require('path'))
var FS = {
    // 同步读取文件封装
    readFileSync: function(arg) {
        return fs.readFileSync(path.resolve(__dirname, arg))
    },
    // 同步写入文件封装
    writeFileSync: function() {
        var arg = []
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i]
        }
        // 已存在则不写入
        if (this.isFileExist(arg[0])) return
        fs.writeFileSync(path.resolve(arg[0]), arg[1])
    },
    // 检查文件是否存在
    isFileExist: function(arg) {
        return fs.existsSync(path.resolve(arg))
    },
    // 拷贝文件到指定目录
    copyFile: function(src, dist) {
        this.writeFileSync(dist, this.readFileSync(src))
    },
    // 批量拷贝文件到指定目录
    batchCopyFile: function(args, srcPrefix, distPrefix) {
        var _this = this
        if (srcPrefix === void 0) {
            srcPrefix = ''
        }
        if (distPrefix === void 0) {
            distPrefix = ''
        }
        if (!Array.isArray(args)) return new Error('the arguments should be Array')
        args.forEach(function(item) {
            _this.copyFile(srcPrefix + item, distPrefix + item)
        })
    },
}
exports.default = FS
//# sourceMappingURL=index.js.map
