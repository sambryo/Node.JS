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
