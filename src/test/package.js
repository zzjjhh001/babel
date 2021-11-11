// 假设package中的页面都在pages文件下。
const fs = require('fs');
const dirPath = '/Users/zhaojinghui/work/babel/package';
const dirPath2 = '/Users/zhaojinghui/work/haodfhuizhen/package';
let paths = [];
addPath(dirPath2);
// 接收一个路径，判断是不是pages，去添加paths
function addPath(path) {
  const pathList = getFiles(path);
  if(pathList.length === 0) {
    return;
  }
  // 包含pages
  if (pathList.includes('pages')) {
    const _path = getFiles( path + '/pages');
    for(item of _path) {
      isPage(path + '/' + 'pages' + '/' +item);
    }
  }
  // 不包含
  for(item of pathList) {
    addPath(path+ '/' + item)
  }
}

// 判断当前目录是不是一个页面。
// 接收一个路径，返回 true or false
function isPage(path) {
  // console.log('path:',path)
  if (hasJsAndMore(getFiles(path))) {
    paths.push(path);
  };
}
// 返回目录下的文件列表
function getFiles(path) {
  if (!fs.lstatSync(path).isDirectory()) {
    return [];
  }
  return fs.readdirSync(path, (err,file) => {
    if(err) {
      return [];
    }
    return file;
  })
}
// 判断当前目录是不是一个页面。接收一个数组。
function hasJsAndMore( files ) {
  // console.log('files:', files)
  let a = false; // json
  let b = false; // wxml
  let c = false; // wcss
  let d = false; // js
  // 
  for( item of files ) {
    it = item.slice(-5);
    itJs = item.slice(-3);
    if (it === '.wxml') {
      b = true;
    }
    // if (it === '.json') {
    //   a = true;
    // }
    // if (it === '.wxss') {
    //   c = true;
    // }
    // if (itJs === '.js') {
    //   d = true;
    // }
  }
  if (b) {
    return true;
  }
  return false;
}
console.log('paths',paths);
console.log(paths.length);

// todo 把是否包含pages的不同处理抽出来。
// todo 仔细看一下路径问题。