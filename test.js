// In Javascript functions are objects. 
//
// object literal 
var obj = {
    color:"green",
    type : "SUV", 
    owner :"John Doe" 
}

var obj2 = function (){
    this.color = "green",
    this.type = "SuV", 
    this.owner = "John Doe"
}

var convertNum = function (num){
    console.log(num + 10);
    return num + 10;
}

var processNum = function(n, fn){
    return fn(n);
}

processNum(10, convertNum);

// Arrays in Javascript
//
var array1 = [1, 'Hello there', function(){return "function called inside array index 2"}];

console.log(array1[2]())


// prototypal inheritance in javascript 
//
var user = function (ops){
    return {
        firstName : ops.firstName || "John", 
        lastName : ops.lastName || "Doe", 
        email : ops.email || "test@test.com",
        name : function (){
            return this.firstName + " " + this.lastName
        }
    }
}


var agency = function (ops){
    ops = ops || {};
    var agency = user(ops);
    agency.customers = ops.customers || 0; 
    agency.isAgency = true;
    return agency;
}

var personOne = {
    firstName : "Tim",
    lastName : "Duncan",
    email : "timz@gmail.com",
}

console.log(user(personOne));


fruits  = ["fruits", "bananna"]
console.log("fruits array--->"); 
console.log(fruits)
fruits.forEach(function(item, index, array){
    console.log(item, index)
});

var last = fruits.pop();
console.log("last item", last)
var last_added = fruits.push("Strawbery")
console.log(last_added)
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift("Pear")

fruits.push("orange")
console.log(fruits.length)

fruits.unshift("Kiwi")

console.log(fruits)

var firstHalf = fruits.splice(0,2)
console.log(firstHalf)

console.log(fruits)

// making shallow copy
var shallowCopy = fruits.slice()
console.log(shallowCopy)

var fs = require('fs')
fs.writeFile('message.txt', 'Hello World',function (err){
    if (err) throw err
    console.log("Writing Done!")
})

// callback example
var mainFunction = function (callBack){
    var someData = "Here is some data"
    callBack(someData)
}
//Anonymous Function inside mainFunction
mainFunction(function(data){
    console.log(data)
});


// Hello World Server with Node.js
var http = require('http')
http.createServer(function (req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    res.end('Hello Wrold \n');
}).listen(1336, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1336/');


// Fat arrow ES6 
// ES5 
var multiply = function (x, y){
    return x * y;
}
// ES6 
var multiply1 = (x,y) => (x * y);
