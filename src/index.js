const isNumber = val => typeof val === 'number' && val === val;
/**
 * 获取无后缀的文件名
 * @param {*} fileName
 */
export function getBaseName(fileName) {
    let lastIdx = -1
    // 文件名不合法或本身无后缀时，直接返回本身
    if (!fileName || (lastIdx = fileName.lastIndexOf('.')) < 0) {
        return fileName
    }
    return fileName.substring(0, lastIdx)
}

/**
 * 获取指定文件名的后缀
 * @param {string}} fileName
 */
export function getExtension(fileName) {
    let lastIdx = -1
    // 文件名不合法或本身无后缀时，直接返回本身
    if (!fileName || (lastIdx = fileName.lastIndexOf('.')) < 0) {
        return fileName
    }
    return fileName.substring(lastIdx + 1)
}

/**
 * 获取文件的大小 1.1MB
 * @param {string}} size
 */
export function countMB(size) {
    const sizeNum = parseFloat(size)
    if (sizeNum === 0 || !isNumber(sizeNum) || Number.isNaN(sizeNum)) return '0 B'
    const k = 1024 // or 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(size) / Math.log(k))

    const n = sizeNum / Math.pow(k, i)
    const num = n >= 1000 ? Math.round(n) : (n).toPrecision(3)

    return num + ' ' + sizes[i]
}

/**
 * 判断文件是否是图片
 * @param {*} fileName 文件全名称
 * @returns {Boolean}
 */
export const isImage = (fileName = '') => {
    let fileExt = getExtension(fileName)
    if (!fileExt) return false
    const imgType = ['jpg', 'jpeg', 'png', 'bmp', 'gif']
    return (imgType.indexOf(fileExt.toLowerCase()) > -1)
}

/**
 * 将base64转blob对象
 * data URLs:data:[<mediatype>][;base64],<data>
 * @param data
 * @return {Blob}
 */
export const base64ToBlob = (data) => {
    let base64Arr = data.split(',')
    let type = base64Arr[0].match(/:(.*?);/)[1]
    let base64String = base64Arr[1]
    // 将base64解码
    var bytes = atob(base64String)
    // var bytes = base64;
    var bytesCode = new ArrayBuffer(bytes.length)
    // 转换为类型化数组
    var byteArray = new Uint8Array(bytesCode)

    // 将base64转换为ascii码
    for (var i = 0, len = bytes.length; i < len; i++) {
        byteArray[i] = bytes.charCodeAt(i)
    }

    // 生成Blob对象（文件对象）
    return new Blob([bytesCode], {
        type: type
    })
}

export const downloadFile = (fileName, url) => {
    let link = document.createElement('a')
    if ('download' in link) {
        link.href = url

        // 浏览器会优先从http的属性里面提取
        link.download = fileName
        link.style.display = 'none'
        document.body.appendChild(link)

        link.click()

        setTimeout(() => {
            document.body.removeChild(link)
        }, 10)
    } else {
        // window.location.href = url
        window.open(url)
    }
}

/**
 * 使用iframe实现文件下载
 * @param url
 */
export const downloadWithIFrame = (url) => {
    let el = document.querySelector('#download-iframe')
    if (!el) {
        el = document.createElement('iframe')
        el.setAttribute('id', 'download-iframe')
        el.style.display = 'none'
        document.body.appendChild(el)
    }
    el.src = url
}

/**
 * @desc 更改文件后缀名为指定的后缀
 * @params filename {String}
 * @params ext {String}
 */
export const changeExt = (filename = '', ext = "") => {
    if (!ext || ext === '') return filename
    let tempArr = filename.split('.').reverse()
    tempArr[0] = ext
    return tempArr.reverse().join('.')
}

/**
 * @desc 将图片转为base64
 * @params {element} img 图片对象
 */
export const image2Base64 = (img) => {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}

/**
 * @desc 获取图片的base64编码
 * @params {element} img 图片对象
 * @params {function} cb 回调函数
 */
export const getImgBase64 = (imgUrl, cb) => {
    var base64 = "";
    var img = new Image();
    img.src = imgUrl;
    img.onload = function () {
        base64 = image2Base64(img);
        cb(base64)
    }
}

/**
 * @desc 将blob对象转为file对象
 * @params {blob} blob blob对象
 * @params {String} fileName 文件名
 */
export const blob2File = (blob, fileName) => {
    let fileExt = getExtension(fileName)
    return new window.File([blob], fileName, {type: `image/${fileExt}`})
}

/**
 * @desc 将image file对象转为base64
 * @params {ImageFile} file 从文件域中获取到的图片文件对象
 * @params {function} cb 回调函数
 */
export const imageFileToBase64 = (file, cb) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        cb({
            error: null,
            data: reader.result
        })
    }
    reader.onerror = function (error) {
        cb({
            error: error,
            data: reader.result
        })
    }
}

export default {
    getBaseName,
    getExtension,
    countMB,
    isImage,
    base64ToBlob,
    changeExt,
    image2Base64,
    getImgBase64,
    imageFileToBase64,
    downloadFile,
    downloadWithIFrame,
}