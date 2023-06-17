const items = {
    fruits:['apple','mango','orange','straberry'],
    liquid:['ice','water'],
    holder:['cup','bowl'],
    tops:['capacheno','chocklet','ice-cream']
 }

 isShopOpen = true;

 let order = () => {
    return new promise((work,time)=>{
        if(isShopOpen){
            setTimeout(()=>{return(work())}, time)
        }
        else {
            console.log(`Shop is closed.`)
        }
    })
 }