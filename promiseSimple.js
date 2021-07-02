const promiseSimple = new Promise((resolve, reject) => {
    if (true === true) {
        resolve(true)
    }
    else {
        reject(false)
    }
})

promiseSimple.then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})