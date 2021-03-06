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

or 

import {
    getBaseName,
} from 'browser-file-utils'
```

> 获取无后缀名的文件名

```JavaScript
import {
    getBaseName,
} from 'browser-file-utils'
console.log(getBaseName('user-avater.png')) // user-avater
console.log(getBaseName('user-avater.jpg.png')) // user-avater.jpg
```
> 获取文件名的后缀名

```JavaScript
import {
    getExtension,
} from 'browser-file-utils'
console.log(getExtension('user-record-list.docx')) // docx
```

> 判断文件是否为图片

```JavaScript
import {
    isImage,
} from 'browser-file-utils'
console.log(isImage('a.b.c.docx')) // false
console.log(isImage('user-avater.png')) // true
```

> 计算文件大小

```JavaScript
import {
    countMB,
} from 'browser-file-utils'
console.log(countMB('1024')) // 1.00 KB
console.log(countMB('5325886')) // 5.08 MB
console.log(countMB('5656545484')) // 5.27 GB
console.log(countMB('5656545484')) // 5.14 TB
``` 

> 图片元素对象转换为base64字符串

```JavaScript
import {
    image2Base64,
} from 'browser-file-utils'

let image = document.createElement('img')
image.src = './demo/WX20210513-091307.png'
document.body.appendChild(image)
image.onload = function () {
    let imageBase64 = image2Base64(image)
    console.log(imageBase64)
}
```


> 服务器图片转为base64

```JavaScript
import {
    getImgBase64,
} from 'browser-file-utils'

getImgBase64('./demo/WX20210513-091307.png', (imgBase64) => {
    console.log(imgBase64)
})
```


> base64 转为 blob对象

```JavaScript
import {
    getImgBase64,
    base64ToBlob,
} from 'browser-file-utils'

getImgBase64('./demo/WX20210513-091307.png', (imgBase64) => {
    console.log(imgBase64)
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    console.log(imageBlob)
})
```

> blob对象转为file对象

```JavaScript
import {
    getImgBase64,
    base64ToBlob,
    blob2File,
} from 'browser-file-utils'

getImgBase64('./demo/WX20210513-091307.png', (imgBase64) => {
    console.log(imgBase64)
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    console.log(imageBlob)
    // 将blob对象转为file对象
    let fileObject = blob2File(imageBlob, 'test.png')
    console.log(fileObject)
})
```

> 通过input文件域获取到的图片file对象转为base64

```JavaScript
import {
    getImgBase64,
    base64ToBlob,
    blob2File,
    imageFileToBase64,
} from 'browser-file-utils'

getImgBase64('./demo/WX20210513-091307.png', (imgBase64) => {
    console.log(imgBase64)
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    console.log(imageBlob)
    // 将blob对象转为file对象
    let fileObject = blob2File(imageBlob, 'test.png')
    console.log(fileObject)
    // 将一个image file对象转为base64
    imageFileToBase64(fileObject, (res) => {
        // res = { error, data }
        let imgTag = document.createElement('img')
        imgTag.src = res.data
        document.body.appendChild(imgTag)
    })
})
```

> 下载文件到本地

```JavaScript
import {
    downloadFile
} from 'browser-file-utils'
// 下载时指定文件名
/**
 * @params fileName 可与真实文件名不一样
 * @params url 下载地址
 * 
*/
downloadFile('tt111.txt', 'http://127.0.0.1:8080/demo/tt.txt')
downloadFile('WX20210513-091307.png', 'http://127.0.0.1:8080/demo/WX20210513-091307.png')
```