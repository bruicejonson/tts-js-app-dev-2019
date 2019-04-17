// Template literal with ES6

//example1 with a string

//ES5
console.log('string line 1\n' + 'string line2');

//ES6
console.log(`String line one
string line 2`);


//example2 with variables 
const name = 'jimmy'
const day = 'Wednesday'

//ES5
console.log("Hello" + name + "I hope you have a great day on" + day);

//ES6
console.log(`Hello ${name} I hope you have a great day on ${day}`);

//example3 with an object
const instructor = {
    name: 'Chris',
    lesson: 'ES6'
}
//ES5
console.log("Hello" + instructor.name + "today's lesson is on" + instructor.lesson);

//ES6
console.log(`Hello ${instructor.name} today's lesson is on ${instructor.lesson}`);

//example4 with a function in ES6 using this
const name = 'jimmy'
const day = 'Wednesday'
const instructor = {
    name: 'Chris',
    lesson: 'ES6',
    greet: function(){
        return `Hello ${this.name} today's lesson is on ${this.lesson}`
    }
}
console.log(instructor.greet());

//This would result in a TypeError because the const variable can only be defined once
const bob = ["Billy", "Joe"]
bob = ["John", "Deer"]

console.log(bob)

// You can add items to a const variable using the .push function
const bob = ["Billy", "Joe"]
bob.push("John","Deer")

console.log(bob)

//This is an example of using a default paramater in a function
function hello(name){
    name = name || 'Mystery Person';
    
    console.log("Hello" + name + " !")
}
//This would log "Hello Mystery Person !", because Mystery Person is the default value of name
hello();

//Binding functions

const teachers = {
    name: "Jimmy",
    speak: function(){
//bound a function to a specific context
        let boundfunction = function(){
        console.log('later my name is '+ this.name);
    };

//bound function will always run in bound context
    setTimeout(boundfunction,1000);
}
};

teachers.speak();


//to fix the prior exercise since in its current state it would run undefined you would want to bind this to the function
const teachers = {
    name: "Jimmy",
    speak: function(){
        let boundfunction = function(){
        console.log('later my name is '+ this.name);
    }.bind(this);
//now this is binded to the function and in this case this is the objects name which is "Jimmy"
    setTimeout(boundfunction,1000);
}
};

teachers.speak();

//Arrow functions

//this is the previous function written as an arrow function
const teachers = {
    name: "Jimmy",
    speak(){
        let boundfunction = () =>{
            console.log('later my name is' + this.name);
        };
        setTimeout(boundfunction,1000);
    }
};
teachers.speak();

//Lexical binding - they bind to scope where defined not where they are used

let students = [
    {name: "Hugo"},
    {name: "Candace"},
    {name: "Taylor"},
    {name: "Dimitri"},
];
//There is an implicit return occuring in this function that can only be done in a single line
let names = students.map((student)=> student.name);
console.log(names);
//same as
let names = students.map((student)=>{
    return student.names
});
console.log(names);
///this will log an array of the students names (Hugo, Candace,Taylor,Dimitri)


function add(){
    console.log("arguments object:", arguments);
    
    // the prototype.slice.call basically takes the numbers given and slices the array starting
    //at 0 and then calling each elemt of the ray and placing it within the argument which is stored in the variable numbers
    var numbers = Array.prototype.slice.call(arguments);
    var sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    return sum;

}
console.log(add(1,2,3,4,5,6,7,8));

//This is the ES6 way of doing the previous function 
//This is also an example of a rest function 
let add= (...numbers)=>{
    console.log("rest parameters", numbers);
    
    let sum = 0;
    
    numbers.forEach(function(number){
        sum+=number
    });
    return sum;
}
console.log( add(1,2,3,4,5,6,7,8));
//This will give you the sum of all the numbers in the console log above
let add =  (...numbers)=> numbers.reduce((sum,number)=>sum += number,0);
//The 0 is the initial value in the above arrow function 

//another example of a rest function using ES6
function addStuff(x,y, ...z){
return (x*y) *z.length
}
console.log(addStuf(1,2,'Hello','World',true,99));


//ES6 example of a Spread Operator(takes the value of its elements and assigns it to another array)
let random = ['Hello','World',true,99]
let newArray = [1,2,...random,3]

console.log(newArray);
//this will log 1,2,'Hello','World',true,99,3

let spreadEx = (item) =>{
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray
}
spreadEx('hello world')
// this will log ['h','e','l','l','o'...]

let restEx = (...z) =>{
    console.log(z)
    return z
}
restEx('hello, world')
//this will log ["hello","world"]

//Dry way of pulling out the elements of an array(destructureing)
var students = ["Julian", "AJ","Matt"];

var x = students[0];
var y = students[1];
var z = students[2];

console.log(x,y,z);

//ES6 way of destructureing
var students = ["Julian","AJ","Matt"];
let [x,y,z] = students
console.log(x,y,z)
//this would log Julian,AJ,Matt

// this is a way to omit an element in an array
let [x, ,z]= students
//this would log Julian, Matt

let [x,...rest]=students
console.log(x,rest)
//this would log Julian ["AJ","Matt"]

//this is an example of a function destructureing an array into 3 variables
let completedHomework = () => {
    return ["Julian","AJ","Matt"]
};
let [x,y,z] = completedHomework();
console.log(x,y,z)

//this also works on objects

let instructor = {
    name:'Jimmy',
    email: 'no@no.com'
}
let {name: x, email: y}=instructor
console.log(x)

//this is an example of using a function and object and destructering it
let car ={
    make: 'Honda'
};
function something(vehicle,year = 2011){
    console.log(vehicle.make,year);
};

something(car);

//this is an example of an contructor function 
function Person (name,job){
    this.name = name;
    this.job = job;
}
Person.prototype.getName = function getName(){
    return this.name
}
Person.prototype.getJob = function getJob(){
    return this.job
}
var goodGuy = new Person ("Aang","Avatar");
console.log(goodGuy);
// this logs Person { name: 'Aang', job: 'Avatar' }

//this is the way to use class when using a constructors
class Person {
    constructor (name, job){
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getJob(){
        return this.job;
    }
}
var badGuy = new Person ("Thanos","Murderer");
console.log(badGuy);
//this logs Person { name: 'Thanos', job: 'Murderer' }

class Person{
    constructor (name,job){
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getJob(){
        return this.job;
    }
}

class SuperHero extends Person {
    constructor (name,heroName,superPower){
        super(name);
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity(){
        return `${this.heroName} is ${this.name} !!`
    }
}

let batman =  new SuperHero ("Bruice Jonson II","Batman","Super Intelegence")
console.log(batman.secretIdentity())
// this is an example of extending one class with another one 

class Person{
    constructor (name){
        this.name = name;
    }
    set name (name){
        this._name =name;
    }
    get name(){
        return this._name
    }
}

let goodGuy = new Person ('Jim Gordon');
console.log(goodGuy.name);
///this will log Jim Gordon
goodGuy.name = 'James Gordon';
console.log(goodGuy.name);
// this changes the log to James Gordon

let student = {name: 'A-aron'};
let status = new Map();

status.set(student.name,'A-aron');
status.set('feeling','churlish');
console.log(status.get(student.name));
console.log(status.get('feeling'))

// using the map class to map out a students name and feeling 

const Guy = (function(){
    const _name = new WeakMap();
    class Guy{
        constructor(name){
            this[_name] = name;
        }
        set name(name){
            this[_name] = name;
        
        }
        get name(){
            return this[_name];
        }
    }
    return Guy;
}());
let guy = new Guy('Fieri');
console.log(guy.name);

//this is an example of incapulation 