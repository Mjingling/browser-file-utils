import {
    getImgBase64,
} from '../src/index.js'

getImgBase64('../demo/WX20210513-091307.png', (imgBase64) => {
    console.log('=======getImgBase64========')
    console.log(imgBase64)
    console.log('=======getImgBase64========')
})