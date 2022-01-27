// 5 => 5 * 4 * 3 * 2 * 1 
function factorial(num){
    let fact=1;
    for(let i=num; i>0; i-- ){
      fact = fact*i;
    }
    return fact
  }
  console.log(factorial(5));
  
  
  function rec(num){
    // break point 
     if(num == 0 || num == 1 ){
       return 1;
     }else{
        return num * rec(num-1);
     }
  }
  
  console.log(rec(5));
  
  