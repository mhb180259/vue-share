/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// 高阶函数、柯里化、适配器
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
