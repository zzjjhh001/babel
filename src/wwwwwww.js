// const {getPackagePath} = require('./directory/package');
const {getPagesPath} = require('./directory/pages');
const {pagesApp} = require('./babel/pages')
const packagePath = '/Users/zhaojinghui/work/haodfhuizhen/package';
const pagesPath = '/Users/zhaojinghui/work/haodfhuizhen/pages';
const appPath = '/Users/zhaojinghui/work/haodfhuizhen/app.json';
const fs =require('fs');
const a =fs.readFileSync(appPath).toString();
const c = JSON.parse(a);
// console.log(pagesApp(c))
console.log('====')
console.log(new getPagesPath().add(pagesPath))
// const total = new getPackagePath().add(packagePath).concat(new getPagesPath().add(pagesPath));
// const totalApp = pagesApp(c);
// for(item of total) {
//   if(!totalApp.inclueds(item)) {
//     console.log(item)
//   }
// }