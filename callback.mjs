// let test = () => console.log(`hello world!`)

// test()

// let test1 = (a) => a*a;
// console.log(test1(5));

// let test3 = () => {
//     for(var i=0; i<5; i++){
//         console.log(`this is statement!`)
//     }
// }

// test3()

// let test4 = (a,b,c) => {
//     if(a<b<c) {
//         console.log(`a is smaller!`)
//     }if (b<a<c) {
//         console.log(`b is smaller!`)
        
//     } else {
//         console.log(`c is smaller!`)
//     }
// }

// test4(5,3,7)

//CallBack

// const test= (a, b, operation) => operation(a,b)

// const operation = (a,b) => a*b;

// let Mult = test(10,20, operation)
// console.log(Mult)


// function calculate(a,b,operation){
//     return operation(a,b);
// }

// let sum = calculate(4,5, (num1,num2) => num1 + num2)
// console.log(sum)

// const multiplication = (a,b) => a*b

// let mult = calculate(5,4,multiplication)
// console.log(mult)

// let sub = calculate(10, 9, function (a,b){
//     return b-a;
// });
// console.log(sub);

// let div = calculate(10,2, (a,b)=> a/b)
// console.log(div);

////callback in array:

// const arr = [1,2,3,4,5,6,7,78,-1,-6,-8]

// let NegSmall = (arr) => arr< 0;

// let Neg = arr.find(NegSmall);
// console.log(Neg);


// let Index = arr.findIndex(NegSmall)
// console.log(Index)

// let ForEach = arr.forEach((arr,i)=>{
//     console.log(arr,i)
// })
// console.log(ForEach)

// function print(fName,lName,fullName){
//     return fullName(fName,lName);
// };

// let name = print("Pradip", "Gadal", (fName,lName)=>`${fName} ${lName}`)
// console.log(name)

// function diffTask(a,b,c){
//     return c(a,b);
// }

// let given = (a,b,c) => c(a,b);

// let compare = (a,b) => a<b ? `${a} is smaller`
//                     : a===b ? `${a} and ${b} are equall` 
//                     : `${b} is smaller`;

// let result = given(9,7,compare);
// console.log(result)

const MainFunction = (callback) => {
    setTimeout(()=> {
        const arr = [1,2,3,4]
        callback(arr)
    },2000)
}

const add = (array) => {
    let sum = 0;
    for(let i of array){
        sum += i;
    }
    console.log(sum)
}

//higher order function:
//example_1:
//simple:
let arr1 = [1,2,3,4]
let arr2 = arr1
console.log(arr2)

//without higher oreder:
let arr3 = [];
for(var i=0; i<arr1.length; i++){
    arr3.push(arr1[i]*2)
};
console.log(arr3);

//with higher order:

let arr4 = [1,2,3,4,5]
let arr5 = arr4.map(function(item){
    return item*2;
});
console.log(arr5)
//using arrow;
let arr6 = arr4.map((item)=>item*2)

console.log(arr6)

//example 2:
//normal:
const BirthYear = [1997, 1995, 2001]
let age=[]
for(var i=0;i<BirthYear.length;i++) {
         let year = 2023 - BirthYear[i]
         age.push(year)       
};
console.log(age);

// with high order
const BirthYear1 = [1997, 1995, 2001]
let age1 = BirthYear1.map(function(item){
    return 2023 - item;
});
console.log(age1)

//higher order with arrow:

let age2 = BirthYear1.map((item)=>2023-item)
console.log(age2)
//example3:
//normal;
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];

 let fullAge = [];
 for(var i=0;i<persons.length;i++){
    if (persons[i].age >= 18){
        fullAge.push(persons.age[i])
     };
 }
  console.log(fullAge)