import { 等于 } from '../通用/等于'

export type 包装非数组<a> = a extends any[] ? a : [a]

var a1: 等于<包装非数组<1>, [1]> = true
var a2: 等于<包装非数组<[1]>, [1]> = true
