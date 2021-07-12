// Prototype
/*
function Person(name){
    this.name = name;
}
Person.prototype.greet = function greet(){
    return `Hi, ${this.name}!`
}
function Student(name){
    this.__proto__.constructor(name);
}
Student.prototype.study = function study(){
    return `${this.name} is studing`;
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('sim');
console.log(me instanceof Student);
console.log(me instanceof Person);
*/
//210712 / pollyfill
// 구버전에서 신버전 기능을 쓰고싶으면 core-js 받아와서 쓰면 됨
// node.js 
require('core-js');

const comArray = [1,[2,3]];
const flatArray = comArray.flat();

console.log(flatArray);

const org = 'abcabc123'
const changed = org.replaceAll('abc', '123');
console.log(changed);

function sleep(duration){
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            console.log(`${duration} wait!!`)
            resolve(null);
        }, duration);
    })
}

Promise.allSettled([sleep(3000), sleep(1000)]).then((value)=>{
    console.log("endendend"+value);
})

//Transpile 코드를 A에서 B언어로 변환 작업 ES6+ -> ES5
//Babel, tsc, ESBuild