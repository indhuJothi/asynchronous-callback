function add(a,b,callback){
    let res;
    res=a+b;
    console.log(res);
    callback();
}
 
function mycallback(){
    console.log('I amd prinitng here after the add res');
}

add(4,5,mycallback);