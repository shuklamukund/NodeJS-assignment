const os=require('os');

const osName=os.platform();//for getting the OS name
const osRelease=os.release();//for getting the OS release version

console.log('Operating System:',osName);
console.log('Release Version:',osRelease);