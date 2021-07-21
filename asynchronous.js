const myasync = ()=>{
    setTimeout(()=>{
    console.log('I am printing after 1 sec as the ending..')
},1000) 
console.log('I am continuing..');
}

const trying = function(){
    console.log('I started ..')
}
trying()
myasync()

