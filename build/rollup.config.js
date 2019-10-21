const path = require('path')
const buble = require('rollup-plugin-buble')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript')

function resolveFile(filepath) {
  return path.join(__dirname, '..', filepath)
}

module.exports = [
  {
    input: resolveFile('src/sort/index.ts'),
    output: {
      file: resolveFile('dist/sort/index.js'),
      format: 'cjs',
      name: 'mue'
    },
    plugins: [
      typescript(),
      resolve(),
      buble(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      })
    ]
  }
]
