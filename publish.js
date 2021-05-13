var process = require('child_process');

// 发布补丁
// npm version patch

// 发布小版本
// npm version minor

// 发布大版本
// npm version major
process.exec('npm version patch',function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    process.exec('npm publish',function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        console.log(stdout)
    });
});
