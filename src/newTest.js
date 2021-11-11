const { isPage, getFiles } = require('./util/index');
const path = '/Users/zhaojinghui/work/haodfhuizhen/package';
// 获取package下的所有的页面数组;
function s(path) {
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
          paths = paths.concat(t(currentPath));
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
// 递归寻找pages
function t(path) {
  let pathList = [];
  if(isPage(path)) {
    return path;
  }
  const _path = getFiles(path);
  for(item of _path) {
    const currentPath = path + '/' +item;
    console.log(currentPath)
    pathList = pathList.concat(t(currentPath));
  }
  return pathList;
}
const a = s(path);
// console.log(a);
console.log(a.length);
