function XO(str) {
    //code here
   str = str.toLowerCase();
  
  let countx = 0;
  let counto = 0;
  
  for (let char of str) {
    if (char === 'x'){
      countx++;
    } else if (char === 'o'){
     counto++; 
    }    
  }
  
  return countx === counto
}