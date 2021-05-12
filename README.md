# browser-file-utils

## 1、简介
浏览器文件操作方法集合

## 2、作用

包含很多文件操作方法

## 3、如何使用

### 3.1 安装
```
npm i browser-file-utils
```

### 3.2 使用方法

> 引入

```JavaScript
import fileUtils from 'browser-file-utils'
```

> 获取无后缀名的文件名

```JavaScript
console.log(fileUtils.getNoSuffixFileName('user-avater.png')) // user-avater
console.log(fileUtils.getNoSuffixFileName('user-avater.jpg.png')) // user-avater.jpg
```
> 获取文件名的后缀名

```JavaScript
console.log(fileUtils.getFileNameSuffix('user-record-list.docx')) // docx
```

> 判断文件是否为图片

```JavaScript
console.log(fileUtils.isImg('a.b.c.docx')) // false
console.log(fileUtils.isImg('user-avater.png')) // true
```

> 计算文件大小

```JavaScript
console.log(fileUtils.countMB('1024')) // 1.00 KB
console.log(fileUtils.countMB('5325886')) // 5.08 MB
console.log(fileUtils.countMB('5656545484')) // 5.27 GB
console.log(fileUtils.countMB('5656545484')) // 5.14 TB
``` 

