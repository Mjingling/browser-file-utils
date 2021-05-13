import {
    image2Base64,
} from '../src/index.js'

let image = document.createElement('img')
image.src = '../demo/WX20210513-091307.png'
document.body.appendChild(image)
image.onload = function () {
    let imageBase64 = image2Base64(image)
    console.log('=======image2Base64========')
    console.log(imageBase64)
    console.log('=======image2Base64========')
}