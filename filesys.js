const { deepStrictEqual } = require('assert')
const fs= require('fs')
//const {readFileSync, writeFileSync}=require('fs')  
//Above and this both are same only difference is: In below declaration only those two method can allow to use

const first= fs.readFileSync('./filesex/first.txt', 'utf-8')

const second= fs.readFileSync('./filesex/second.txt', 'utf-8')

console.log(`The result is : ${first} , ${second}.`);



fs.writeFileSync('./filesex/result.txt',first)

//fs.writeFileSync('./filesex/result.txt',second)
fs.writeFileSync('./filesex/result.txt',first,{flag:'a'})