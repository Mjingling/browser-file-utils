import {
    getImgBase64,
    base64ToBlob,
} from '../src/index.js'

getImgBase64('./demo/WX20210513-091307.png', (imgBase64) => {
    console.log(imgBase64)
    // base64转换为 blob对象
    let imageBlob = base64ToBlob(imgBase64)
    console.log(imageBlob)
    console.log('=======base64ToBlob========')
    console.log(imageBlob)
    console.log('=======base64ToBlob========')
})