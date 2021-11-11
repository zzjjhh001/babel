// 比较数组
const { getAllpages} = require('./util/index');
const { pagesApp } = require('./app');
const dirPath = '/Users/zhaojinghui/work/haodfhuizhen'; // 后续改为相对路径，使用pwd获取路径。
// 扫目录的路径
const dirPaths = getAllpages(dirPath);
// app.json的目录
const appPaths = pagesApp(dirPath);
console.log(dirPaths.length)
// console.log(dirPaths)
console.log(appPaths)
function comPare(one, two) {
  let len = 0;
  for(item of two) {
    if(!one.includes(item)) {
      console.log(item)
      len++;
    }
  }
  console.log(len)
}
comPare(appPaths, dirPaths);

