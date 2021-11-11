const fs = require('fs');
const dirPath2 = '/Users/zhaojinghui/work/haodfhuizhen/pages';
const { isPage, getFiles } = require('./util/index');
let paths = [];
function addPath(path) {
  const pathList = getFiles(path);
  if(pathList.length === 0) {
    return;
  }
  console.log(isPage(path))
  if(isPage(path)) {
    return [path];
  } else {
    for (item of pathList) {
      paths.concat(addPath(path + '/' + item));
    }
  }
  return paths;
}
console.log(addPath(dirPath2));
console.log(paths)
