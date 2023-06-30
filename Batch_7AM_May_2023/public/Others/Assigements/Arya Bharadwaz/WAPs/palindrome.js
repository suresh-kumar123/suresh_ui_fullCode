function palindrome(){
    const readline = require('readline');
    const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Enter a multi-digit number:", x => {
    let rev = 0;
    let temp = parseInt(x);

    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (temp === rev) {
        console.log(`${temp} is a palindrome`);
    } else {
        console.log(`${temp} is not a palindrome.`);
    }
    reader.close();
});

}
palindrome()