function diamond(n){
    let diamond = ''
    let spaces = (n-1)/2
   
    if(n === 1) {return diamond}
    for(let i = 1; i < n; i++){
     diamond +=  '*'.repeat(i) + '\n'
    }
    for(let i = n; i >= 1; i--){
        diamond += '*'.repeat(i) + '\n'
    }
return diamond
  }

  console.log(diamond(5))     