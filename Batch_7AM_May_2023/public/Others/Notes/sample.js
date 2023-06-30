var promise = new Promise((resolve, reject) => {
    if(false) {
        resolve("hello");
    } else {
        reject("error")
    }
});

promise.then(() => {
    console.log("from success")
}).catch(() => {
    console.log("frm error")
})