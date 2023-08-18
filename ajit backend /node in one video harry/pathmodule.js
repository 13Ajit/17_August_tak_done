const path = require('node:path');//copy paste from goggle. node js documentation.

// console.log(path.dirname())

// const a = path.dirname('/foo/bar/baz/asdf/quux');
// // Returns: '/foo/bar/baz/asdf'

const a = path.extname(__filename);//to show the extension of file. jo ki js hai
console.log(a);

console.log(__filename)//to print file name jo ki pathmodule.js hai

