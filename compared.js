// export.js
// 1）原始方式
export let firstName = '黄'
export let lastName = '婧'

// 2）推荐方式 使用大括号指定所要输出的一组变量
let firstName = '黄'
let lastName = '婧'
export { firstName, lastName };

// 3）export命令除了输出变量，还可以输出函数或类（class）
export function a () {};

// 4) export输出的变量就是本来的名字，但是可以使用as关键字重命名
function a () {}
function b () {}
export {
    a as func1,
    b as func2
};

// 总结写法：
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};

// import.js 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载
import {firstName, lastName } from './export.js';
import { lastName as surname } from './export.js';
// 逐一加载
import { area, circumference } from './circle';
// 整体加载
import * as circle from './circle'
// import 可以用来输出class
// MyClass.js
export default class { ... }
// main.js
import MyClass from 'MyClass'
let o = new MyClass()
// export default 本质上，export default就是输出一个叫做default的变量或方法; 可以为该匿名函数指定任意名字
export default function () {
    console.log('foo');
  }
import customName from './export-default';

// 比较  
// 1）第一组是使用export default时，对应的import语句不需要使用大括号；
// 2）第二组是不使用export default时，对应的import语句需要使用大括号。
// 第一组
export default function crc32() {} 
import crc32 from 'crc32'
// 第二组
export function crc32() {} 
import {crc32} from 'crc32'
// 写法对比
// 正确
export var a = 1;
// 正确
var a = 1;
export default a;  // 将变量a赋值给变量default
// 错误
export default var a = 1;
