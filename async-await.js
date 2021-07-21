const data = async ()=>{
    let name= await "Indhu";
    console.log('Hi I am %s',name);

}
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  const doSomething = async () => {
  console.log(await doSomethingAsync())
}
console.log('Hi');
data();
console.log('Introducue yourself')

doSomething()