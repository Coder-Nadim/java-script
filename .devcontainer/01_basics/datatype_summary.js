/// primitive datatype is a 7 categries

// string 
// number
// boolean
// null 
// undefined
// bigint
// symbol

const score = 100
const scorevalue = 100.3

const isLoggedin = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber = 1328645659854654n
// console.log(typeof bignumber);

/// Non Primitive ya reference data type

// Array, Object, Function

const heros = ["shaktiman", "nagraj", "doga"];


let myobj = {
    name: "nadim",
    age: 25,
}


const myfunctoin = function (s) {
    console.log("hello world");

}


console.log(typeof heros);
