function add(c) {
  let pagePath = []; // 主包的路径
  let pageFenPath = [];// 分包的路径
  let pageMainPath = []; // tar的路径
  // 获取主包
  pagePath = pagePath.concat(c.pages);
  // 获取分包
  for(n of c.subPackages) {
    for(m of n.pages) {
      pageFenPath.push(n.root+m);
    }
  }
  // 获取tar
  for(item of c.tabBar.list) {
    pageMainPath.push(item.pagePath);
  }
  console.log(pageMainPath)
  console.log(pageMainPath.length, pagePath.length, pageFenPath.length)
  console.log(pageMainPath.length+pagePath.length+pageFenPath.length);
  return pageMainPath.concat(pagePath, pageFenPath)
}

module.exports.pagesApp = add;