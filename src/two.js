const t  = require('@babel/types');
const { parse } = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const { default: generator } = require('@babel/generator');
const fs =require('fs');
const a = 'let a = ' + fs.readFileSync('./hb.json').toString() + ';';
let visitor = {
  VariableDeclarator(path) {
    let sysname = path.node.init.properties[0];
    let newsysDetail = path.node.init.properties;
    let test = path.node.init.properties[0].value.elements;
    insertEle(test)
  }
}

// 将两个hb.json合并
// 先读取一个的节点，在添加到到另一个上。

// 解析生成ast树
const aa = parse(a, { plugins: [ { } ] } );
console.log(aa)
// 修改ast树
const aabb = traverse(aa, {})
// const ast = aa.program.body[0].declarations[0].init.properties[0].value;
// 生成代码
// console.log(aabb)
let ss = generator(aabb);
console.log(ss)
fs.writeFileSync('./hb2.json', ss.code.slice(8, -1));




function insertEle (node, code) {
  node.push(
    t.objectProperty(
      t.identifier('"namqwe1e"'), t.stringLiteral('qwe')),
    t.objectProperty(
      t.identifier('"qwe"'), ast),
  )
}