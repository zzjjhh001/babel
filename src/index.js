const babel = require('babel-core');
const t  = require('@babel/types');
const { parse } = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const { default: generator } = require('@babel/generator');
const fs =require('fs');
const path = require('path');
const a = 'let a = ' + fs.readFileSync('./hb.json').toString() + ';';
const b = 'let b = ' + fs.readFileSync('./hb1.json').toString() + ';';
const c = a + b;
let visitor = {
  VariableDeclarator(path) {
    let sysname = path.node.init.properties[0];
    let newsysDetail = path.node.init.properties;
    // console.log(path.node.init.properties[0].value.elements);
    let test = path.node.init.properties[0].value.elements;
    // console.log(path.node.init.properties[1].value.properties)
    // let test2 = path.node.init.properties[1].value.properties;
    // console.log(test2)
    // insertStr(test, '"pages/a", "pages/b", "pages/c"');
    
    insertEle(test)

    // test.push(
    //   t.identifier('"pages/a", "pages/b", "pages/c"')
    // );
    // newsysDetail.push(
    //   t.objectProperty(
    //       t.arrayExpression([t.identifier('"pages/a"'), t.identifier('"pages/a"')])
    //   )
    // )
  }
}
// 插入字符串
// node :一个节点。path.node.init.properties；path.node.init.properties[0].value.elements；
// code 插入的代码。
function insertStr (node, code) {
  node.push(
    t.identifier(code)
  )
}
function insertEle (node, code) {
  node.push(
    t.objectProperty(
      t.identifier('"namqwe1e"'), t.stringLiteral('qwe')),
    t.objectProperty(
      t.identifier('"qwe"'), ast),
  )
}
const aa = parse(a, {
  plugins: [
    {}
  ]
});
const bb = parse(a, {
  plugins: [
    {}
  ]
});
// console.log(aa);
// console.log(aa.program);
// console.log(aa.program.body[0].declarations);
// console.log('====')
// console.log(aa.program.body[0].declarations[0].id);
// console.log('======')
// console.log(aa.program.body[0].declarations[0].init);
// console.log(aa.program.body[0].declarations[0].init.properties[0]);
// console.log('key')
// console.log(aa.program.body[0].declarations[0].init.properties[0].key);
// console.log('value')
// console.log(aa.program.body[0].declarations[0].init.properties[0].value);
const ast = aa.program.body[0].declarations[0].init.properties[0].value;
// let result = babel.transform(ast, {
//   plugins: [
//     { visitor }
//   ]
// })
let ss = generator(ast);
// console.log(bb);
// console.log(aa.)
// const aabb = traverse(aa, {
//   Identifier(path) {
//     console.log(path)
//     console.log("=====")
//   }
// })

// console.log(dd)
fs.writeFileSync('./hb2.json', ss.code);
// 先解析在合并。
// let result = babel.transform(c, {
//   plugins: [
//     { visitor }
//   ]
// })