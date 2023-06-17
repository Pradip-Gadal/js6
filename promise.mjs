const items = {
    fruits:['apple','mango','orange','straberry'],
    liquid:['ice','water'],
    holder:['cup','bowl'],
    tops:['capacheno','chocklet','ice-cream']
 }

 isShopOpen = true;

 let order = (work, time) => {
    return new promise((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(()=>{resolve(work())}, time)
        }
        else {
            reject(console.log(`Shop is closed.`))
        }
    })
 }
 
 order(items.fruits[1], 2000)