import { 数组反转 } from './数组反转'
import { 是never } from './是never'
import { 等于 } from './类型等价判定'

export type 取数组最后一个<Arr> = 数组反转<Arr> extends [infer a, ...infer as] ? a : never

var a: 等于<取数组最后一个<[1, 2, 3]>, 3> = true
var a: 等于<是never<取数组最后一个<[]>>, true> = true
