import {
    getImgBase64,
    base64ToBlob,
    blob2File,
    imageFileToBase64,
} from '../src/index.js'

getImgBase64('../demo/WX20210513-091307.png', (imgBase64) => {
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    // 将blob对象转为file对象
    let fileObject = blob2File(imageBlob, 'test.png')
    // 将一个image file对象转为base64
    imageFileToBase64(fileObject, (res) => {
        // res = { error, data }
        let imgTag = document.createElement('img')
        // set base64 data as a img tag's src
        imgTag.src = res.data
        document.body.appendChild(imgTag)
    })
})