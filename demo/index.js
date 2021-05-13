import {
    getNoSuffixFileName,
    getFileNameSuffix,
    getFileNamePrefix,
    countMB,
    isImg,
    download,
    downloadWithIFrame,
    getImgBase64,
    image2Base64,
    base64ToBlob,
    blob2File,
    imageFileToBase64,
} from '../src/index.js'

// 获取无后缀名的文件名
console.log(getNoSuffixFileName('user-avater.png'))
console.log(getNoSuffixFileName('user-avater.jpg.png'))

// 获取 后缀名
console.log(getFileNameSuffix('user-record-list.docx'))


// 获取无后缀名的文件名
console.log(getFileNamePrefix('a.b.c.png'))

// 文件大小字符串
console.log(countMB('1024'))
console.log(countMB('5325886')) // 1.00 KB
console.log(countMB('5656545484')) // 5.08 MB
console.log(countMB('5656545484894')) // 5.27 GB

// 根据文件名判断是否是图片
console.log(isImg('user-record-list.docx'))
console.log(isImg('user-avater.png'))

// 下载本地文件
// console.log(download('tt.txt', 'http://127.0.0.1:8080/demo/tt.txt'))

// 通过iframe下载文件
console.log(downloadWithIFrame('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2447663200,2792961186&fm=11&gp=0.jpg'))

// 图片对象转为base64
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
        let imgTag = document.createElement('img')
        imgTag.src = res.data
        document.body.appendChild(imgTag)
    })
})


// 图片对象转为base64
;(function(){
    let image = document.createElement('img')
    image.src = './demo/WX20210513-091307.png'
    document.body.appendChild(image)
    image.onload = function () {
        let imageBase64 = image2Base64(image)
        console.log(imageBase64)
    }
})()

