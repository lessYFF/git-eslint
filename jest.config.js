module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // 忽略测试路径
}
