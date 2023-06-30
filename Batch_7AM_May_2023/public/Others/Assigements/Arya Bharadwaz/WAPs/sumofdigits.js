function sumOfdigits(){
    let x = "1234"
    let temp = parseInt(x);
   let sum = 0
   
   while(temp>0){
       let rem = temp % 10;
       sum += rem
       temp = Math.floor(temp/10);
   }
   console.log(sum)
}

sumOfdigits()