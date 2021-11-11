// 在app.json中获取路径
// 接受一个包含app.json文件的路径
const fs = require('fs')
function add(path) {
  let pagePath = [];// 主包的路径
  let pageFenPath = [];// 分包的路径
  let pageMainPath = []; // tar的路径
  path = path + '/app.json';
  const a =fs.readFileSync(path).toString();
  const c = JSON.parse(a);
  // 获取主包
  pagePath = pagePath.concat(c.pages);
  // 获取分包
  for(n of c.subPackages) {
    for(m of n.pages) {
      pageFenPath.push(n.root + m);
    }
  }
  // 获取tar
  for(item of c.tabBar.list) {
    pageMainPath.push(item.pagePath);
  }
  return pageMainPath.concat(pagePath, pageFenPath)
}

module.exports.pagesApp = add;