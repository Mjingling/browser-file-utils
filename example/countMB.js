import { countMB } from '../src/index.js'
// 文件大小字符串
console.log(countMB('1024'))
console.log(countMB('5325886')) // 1.00 KB
console.log(countMB('5656545484')) // 5.08 MB
console.log(countMB('5656545484894')) // 5.27 GB