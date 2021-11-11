const fs = require('fs');
function isPage(path) {
  return hasJsAndMore(getFiles(path));
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
    if (it === '.json') {
      a = true;
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
// 递归寻找pages, 获取pages下的。
function pages(path) {
  let pathList = [];
  if(isPage(path)) {
    return path;
  }
  const _path = getFiles(path);
  for(item of _path) {
    const currentPath = path + '/' +item;
    pathList = pathList.concat(pages(currentPath));
  }
  return pathList;
}

// 获取package下的所有的页面数组;
function packages(path) {
  let paths = [];
  function getPacckagePath(path) {
    const pathList = getFiles(path);
    if(pathList.length === 0) {
      return;
    }
    // 包含pages
    if (pathList.includes('pages')) {
      // todo 当pages下的文件还有一个层级才到页面时
      const _path = getFiles( path + '/pages');
      for(item of _path) {
        const currentPath = path + '/' + 'pages' + '/' +item;
        if(isPage(currentPath)) {
          // todo 插入路径时，先获取下一级文件名
          paths.push(currentPath)
        } else {
          paths = paths.concat(pages(currentPath));
        }
      }
    }
    // 不包含
    for(item of pathList) {
      getPacckagePath(path+ '/' + item)
    }
  }
  getPacckagePath(path);
  return paths;
}

module.exports = { isPage, getFiles, pages, packages };