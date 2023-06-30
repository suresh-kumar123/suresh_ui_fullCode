


function palindrome(n){
    var palindromes = []
    for ( i = 1; i <=n; i++){
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

console.log(palindrome(1000));
