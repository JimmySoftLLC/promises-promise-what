# promises-promise-what

This post will be on promises in javascript. Promises are used for asynchronous processes where something will take time and it will prevent blocking your code. Promises return a resolve for a successful operation or a reject for a failure.

Define a promise as follows and then use .then for the success and .catch for failure. To test the failure condition just change the if statement to true === false.

```
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
```

The example above is not that useful. Usually parameters are passed to a promise. How is that done? Simply wrap the promise with another function as shown below.

```
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
```

What if you want to do promises one after another synchronously? You can call one within the .then of the other, but this creates a really bad design pattern call the pyramid of doom.

```
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

const promiseWithParam1 = promiseWithParam
const promiseWithParam2 = promiseWithParam
const promiseWithParam3 = promiseWithParam
const promiseWithParam4 = promiseWithParam
const promiseWithParam5 = promiseWithParam
const promiseWithParam6 = promiseWithParam
const promiseWithParam7 = promiseWithParam

const myBoolean = true

promiseWithParam1(myBoolean).then(function (successResult1) {
    promiseWithParam2(successResult1).then(function (successResult2) {
        promiseWithParam3(successResult2).then(function (successResult3) {
            promiseWithParam4(successResult3).then(function (successResult4) {
                promiseWithParam5(successResult4).then(function (successResult5) {
                    promiseWithParam6(successResult5).then(function (successResult6) {
                        promiseWithParam7(successResult6).then(function (successResult7) {
                            console.log(successResult7)
                        }).catch((errorResult7) => {
                            console.log(errorResult7)
                        })
                    }).catch((errorResult6) => {
                        console.log(errorResult6)
                    })
                }).catch((errorResult5) => {
                    console.log(errorResult5)
                })
            }).catch((errorResult4) => {
                console.log(errorResult4)
            })
        }).catch((errorResult3) => {
            console.log(errorResult3)
        })
    }).catch((errorResult2) => {
        console.log(errorResult2)
    })
}).catch((errorResult1) => {
    console.log(errorResult1)
})
```

You can flatten the pyramid as follows. This is much simpler and needs only one catch statement but still I think .thens are just too hard to read.

```
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

const promiseWithParam1 = promiseWithParam
const promiseWithParam2 = promiseWithParam
const promiseWithParam3 = promiseWithParam
const promiseWithParam4 = promiseWithParam
const promiseWithParam5 = promiseWithParam
const promiseWithParam6 = promiseWithParam
const promiseWithParam7 = promiseWithParam

const myBoolean = true

promiseWithParam1(myBoolean).then(function (successResult1) {
    return promiseWithParam2(successResult1)
}).then(function (successResult2) {
    return promiseWithParam3(successResult2)
}).then(function (successResult3) {
    return promiseWithParam4(successResult3)
}).then(function (successResult4) {
    return promiseWithParam5(successResult4)
}).then(function (successResult5) {
    return promiseWithParam6(successResult5)
}).then(function (successResult6) {
    return promiseWithParam7(successResult6)
}).then(function (successResult7) {
    console.log(successResult7)
}).catch((errorResult) => {
    console.log(errorResult)
})
```

A better method is to use async/await. The code reads so much better imo.

```
const asyncPromiseWithParam = async (myBoolean) => {
    return new Promise(function (resolve, reject) {
        if (myBoolean === true) {
            resolve(true)
        }
        else {
            reject(false)
        }
    });
}

const asyncPromiseWithParam1 = asyncPromiseWithParam
const asyncPromiseWithParam2 = asyncPromiseWithParam
const asyncPromiseWithParam3 = asyncPromiseWithParam
const asyncPromiseWithParam4 = asyncPromiseWithParam
const asyncPromiseWithParam5 = asyncPromiseWithParam
const asyncPromiseWithParam6 = asyncPromiseWithParam
const asyncPromiseWithParam7 = asyncPromiseWithParam

const myBoolean = true

const asyncFunction = async (myBoolean) => {
    try {
        const successResult1 = await asyncPromiseWithParam1(myBoolean)
        const successResult2 = await asyncPromiseWithParam2(successResult1)
        const successResult3 = await asyncPromiseWithParam3(successResult2)
        const successResult4 = await asyncPromiseWithParam4(successResult3)
        const successResult5 = await asyncPromiseWithParam5(successResult4)
        const successResult6 = await asyncPromiseWithParam6(successResult5)
        const successResult7 = await asyncPromiseWithParam7(successResult6)
        console.log(successResult7)
    } catch (errorResult) {
        console.log(errorResult)
    }
}

asyncFunction(myBoolean)
```

Promises are used a lot in javascript and now you know how to use them. Have fun coding with promises :).