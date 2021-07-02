const promiseWithParam = (myBoolean) => {
    return new Promise(function (resolve, reject) {
        if (myBoolean === true) {
            resolve(true)
        }
        else {
            reject(false)
        }
    });
}

promiseWithParam(true).then(function (result) {
    console.log(result)
}).catch((result) => {
    console.log(result)
})