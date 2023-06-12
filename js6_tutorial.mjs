/*let Keyword:(let vs var)
1) What is let?
2) let vs var and use of let.
3) Define 2 ler with same name.
4) Hosting with let.
5) Let with loop.*/

// use of let
let a = 10;
if(true){
    let a = 20;
    console.log(a);
};
console.log(a);

var b = 10;
if(true){
    var b = 20;
    console.log(b);
};
console.log(b);

// hosting with let:
// console.log(c);
// let c;
 /* error:Cannot access 'c' before initialization */
 let c;
 console.log(c);
 
 //but

 console.log(d);
 var d;

 //let with loop:

 for(var i=0;i<=10;i++){
    console.log(i)
 };
//but gives output only 10 when 

for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
};
//So, to fixit we use let

for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);
    },1000)
};




