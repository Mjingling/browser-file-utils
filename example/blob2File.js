import {
    getImgBase64,
    base64ToBlob,
    blob2File,
} from '../src/index.js'

getImgBase64('../demo/WX20210513-091307.png', (imgBase64) => {
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    // 将blob对象转为file对象
    let fileObject = blob2File(imageBlob, 'test.png')
    console.log('=======blob2File========')
    console.log(fileObject)
    console.log('=======blob2File========')
})