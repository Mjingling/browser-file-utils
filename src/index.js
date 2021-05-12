const isNumber = val => typeof val === 'number' && val === val;
/**
  * 检查文件类型是否合法
  * @param accept
  * @param fileMime
  * @return {boolean}
  */
export function checkFileType (accept, fileMime) {
    if (!accept || !fileMime || accept === '*') return true
    let fileTypes = fileMime.split('/')
    return accept.split(',').some(mime => {
        let types = mime.split('/')
        return types[0] === fileTypes[0] && (types[1] === '*' || fileTypes[1] === types[1])
    })
}

/**
 * 获取无后缀的文件名
 * @param {*} fileName
 */
export function getNoSuffixFileName (fileName) {
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
export function getFileNameSuffix (fileName) {
    let lastIdx = -1
    // 文件名不合法或本身无后缀时，直接返回本身
    if (!fileName || (lastIdx = fileName.lastIndexOf('.')) < 0) {
        return fileName
    }
    return fileName.substring(lastIdx + 1)
}

/**
 * 获取文件前缀名
 * @param {*} fileName 文件全名称
 * @returns {String}
 */
export function getFileNamePrefix (fileName) {
    if (fileName) {
        let idx = fileName.lastIndexOf('.')
        return idx !== -1 ? fileName.substring(0, idx) : fileName
    }
    return ''
}

/**
 * 获取文件的大小 1.1MB
 * @param {string}} size
 */
export function countMB (size) {
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
export const isImg = (fileName = '') => {
    let fileExt = getFileNameSuffix(fileName)
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
    let imgType = base64Arr[0].match(/:(.*?);/)[1]
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
    return new Blob([bytesCode], { type: imgType })
}

export const download = (fileName, url) => {
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
export const downloadWithIFrame = (url, props) => {
    let el = document.querySelector('#download-iframe')
    if (!el) {
        el = document.createElement('iframe')
        el.setAttribute('id', 'download-iframe')
        el.style.display = 'none'
        document.body.appendChild(el)
    }
    el.src = url
}

export default {
    getNoSuffixFileName,
    getFileNameSuffix,
    getFileNamePrefix,
    countMB,
    isImg,
}
