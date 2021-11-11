const { pages, packages } = require('../util/index');
const packagePath = '/Users/zhaojinghui/work/haodfhuizhen/package';
const pagesPath = '/Users/zhaojinghui/work/haodfhuizhen/pages';
function getAllPaths(path) {
  
}
console.log(pages(pagesPath).length)
console.log(packages(packagePath).length)
console.log(pages(pagesPath).length + packages(packagePath).length);