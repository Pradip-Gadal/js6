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