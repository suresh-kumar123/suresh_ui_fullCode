
function palindrome(){
    var palindromes = []
    for ( i = 500; i >=20; i--){
        var temp = i;
        var reverse = 0
        while(temp > 0){
            var remainder = temp % 10;
            reverse = reverse * 10 + remainder;
            temp = Math.floor(temp / 10)
        }
        if(reverse == i){
            palindromes.push(i)
        }
        
    }return palindromes;
}

console.log(palindrome());
