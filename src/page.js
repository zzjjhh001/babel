const fs = require('fs');
const dirPath = '/Users/zhaojinghui/work/babel/page';
const dirPath2 = '/Users/zhaojinghui/work/haodfhuizhen/pages';
let paths = [];
addPath(dirPath2);
console.log(paths)
function addPath(path) {
  const pathList = getFiles(path);
  if(pathList.length === 0) {
    return;
  }
  if(isPage(path)) {
    return [];
  }
  for (item of pathList) {
    addPath(path + '/' + item);
  }
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
    if (it === '.json') {
      a = true;
    }
    if (it === '.wxml') {
      b = true;
    }
    if (it === '.wxss') {
      c = true;
    }
    if (itJs === '.js') {
      d = true;
    }
  }
  if (a && b && c && d) {
    return true;
  }
  return false;
}

// 判断当前目录是不是一个页面。
// 接收一个路径，返回 true or false
function isPage(path) {
  if (hasJsAndMore(getFiles(path))) {
    paths.push(path);
  };
}