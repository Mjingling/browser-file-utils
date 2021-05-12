import {
    getNoSuffixFileName,
    getFileNameSuffix,
    getFileNamePrefix,
    countMB,
    isImg,
    download,
    downloadWithIFrame,
} from '../src/index.js'
console.log(getNoSuffixFileName('a.b.c.png'))
console.log(getFileNameSuffix('a.b.c.png'))
console.log(getFileNamePrefix('a.b.c.png'))
console.log(countMB('1024'))
console.log(isImg('a.b.c.docx'))
console.log(download('tt.txt', 'http://127.0.0.1:8080/demo/tt.txt'))
// console.log(downloadWithIFrame('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2447663200,2792961186&fm=11&gp=0.jpg'))