const t  = require('@babel/types');
const { parse } = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const { default: generator } = require('@babel/generator');
const fs =require('fs');
const a = 'let a = ' + fs.readFileSync('./hb.json').toString() + ';';
let visitor = {
  VariableDeclarator(path) {
    console.log(path)
    let sysname = path.node.init.properties[0];
    let newsysDetail = path.node.init.properties;
    let test = path.node.init.properties[0].value.elements;
    console.log(sysname)
    console.log('=====')
    console.log(newsysDetail)
    console.log('=====')
    console.log(test)
  }
}
let c = parse(a, {
  plugins: [
    { visitor }
  ]
})