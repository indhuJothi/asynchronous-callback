let done = true
const IsDone = new Promise((resolve,reject)=>{
    if(done){ // if you assign done= false the reject will give the res
        const workdone= 'The work is done'
        resolve(workdone)
    }
    else{
        const rej='It is rejected'
        reject(rej)
    }
})

const check =()=>{
  IsDone.then(ok=>
  {
   console.log(ok)
  }).catch(err=>{
      console.log(err)
  }

  )
}

check()
