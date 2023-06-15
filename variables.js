//ex1
var noOfChild = 4;
var ParentName = "lal bdr kami";
var GeographicLocation = "nepal";
var jobTitle = "frontEndDeveloper";
console.log(`${ParentName} will be in ${GeographicLocation} working as ${jobTitle}, and married with ${noOfChild}`)


//ex2
var DoB1 = 1997;
var DoB2 = 1998;
var year = 2024;
console.log(`i will be ${year-DoB1} or ${year-DoB2} in ${year}`)

//ex3
var currentAge = 26;
var maxAge = 75;
var dailyConsumption = 300;
let totalConsumption = (a=currentAge,b=maxAge,c=dailyConsumption)=> (b-a)*c*365;
console.log(`i will consume ${totalConsumption()} when i will be ${maxAge}`) 

//ex4
var radius = 5
const pi = 3.12
let circumferance = (radius,pi) => 2*pi*radius
let area = (radius, pi) => pi*radius**2
console.log(`the circumference is ${circumferance(10,3.12)}\n the area is ${area(12,3.12)}`)

