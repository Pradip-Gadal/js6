const items = {
    fruits:['apple','mango','orange','straberry'],
    liquid:['ice','water'],
    holder:['cup','bowl'],
    tops:['capacheno','chocklet','ice-cream']
 }
 
//  let is_it_ok = true;

//  async function order(){
//     try{
//         await abc;
//     } catch(error){
//         console.log("this is bad", error)
//     }finally{
//         console.log("got it.")
//     }
    
//  }

let ask_toping = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log(`which toping do you want?`));
        },3000)
    })
}

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")
    await ask_toping()
    console.log("D")
    console.log("E")
    console.log("F")
    console.log("G")
}

kitchen()

console.log("H")
console.log("I")




let choiceGame = {
    name: ["pradip", "pramila", "ishita", "ishak"],
    class: ["bachlour","+2", "S.E.E", "5"],
    hobby:["Coding", "traveling","drawing","playing"]
}

let ask0 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("what is you name?"))
        },2000)
    })
}

let ask1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("what is your quallification?"))
        },2000)
    })
}

async function choiceAndDetails(){
    await ask0();
    console.log(`my name is ${choiceGame.name[0]}`);
    await ask1();
    console.log(`I had completed ${choiceGame.class[0]}`);
}

choiceAndDetails()

console.log(`lets play the game.`)


const items1 = {
    fruits:['apple','mango','orange','straberry'],
    liquid:['ice','water'],
    holder:['cup','bowl'],
    tops:['capacheno','chocklet','ice-cream']
 }
let isShopOpen = false;
let time = (ms) => {
    return new Promise((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms);
        }
        else {
            console.log("Shop is closed.")
        }
    })
}

async function makeCoffee(){
    try{
        await time(0)
        console.log('What do you want?');
        await time(2000)
        console.log(`${items1.fruits[1]}`);
        console.log("Ice or Water?");
        await time(1000);
        console.log(`${items1.liquid[0]}`);
        console.log("Which holder do you perfere?");
        await time(2000)
        console.log(`${items1.holder[1]}`);
        console.log("Toping Mam?");
        await time(3000)
        console.log(`${items1.tops[2]}`);
        console.log("thank you mam!");
        await time(6000)
        console.log("The drink is served.");
     }
    catch(error){
        console.log("sorry for problems.",error);
    }
    finally{
        console.log("Customer left.....");
    }

}

makeCoffee();