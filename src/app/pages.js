const fs =require('fs');
const dirPath2 = '/Users/zhaojinghui/work/haodfhuizhen/app.json';
const a =fs.readFileSync(dirPath2).toString();
let pagePath = []; // 主包的路径
let pageFenPath = [];// 分包的路径
let pageMainPath = []; // tar的路径
const c = JSON.parse(a);
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
console.log('tar的四个：', pageMainPath.length)
console.log('pages文件下的：', pagePath.length)
console.log('package文件下的:', pageFenPath.length)
console.log(pageFenPath)
console.log(pageMainPath.length+pagePath.length+pageFenPath.length)