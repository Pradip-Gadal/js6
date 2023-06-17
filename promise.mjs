const items = {
    fruits:['apple','mango','orange','straberry'],
    liquid:['ice','water'],
    holder:['cup','bowl'],
    tops:['capacheno','chocklet','ice-cream']
 }

 let isShopOpen = true;
 let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log(`The Shop Is Closed.`))
        }
    })

 }

 order(2000, ()=>console.log(`${items.fruits[1]} was selected`))

 .then(()=>{
    return order(0, ()=>console.log(`Production has been started.`) )
 })
 .then(()=>{
    return order(2000,()=>console.log(`Fruit has been choped.`))
 })
 .then(()=>{
    return order(1000, ()=>console.log(`Add water and ice.`))
 })
 .then(()=>{
    return order(1000, ()=>console.log(`start the machine.`))
 })
//  .then()
