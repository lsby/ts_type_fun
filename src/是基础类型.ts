import { 等于 } from './类型等价判定'

export type 是基础类型<a> = a extends string ? true : a extends number ? true : a extends boolean ? true : false

var a1: 等于<是基础类型<1>, true> = true
var a1: 等于<是基础类型<2>, true> = true
var a1: 等于<是基础类型<'a'>, true> = true
var a1: 等于<是基础类型<true>, true> = true
var a1: 等于<是基础类型<[]>, false> = true
var a1: 等于<是基础类型<{}>, false> = true
