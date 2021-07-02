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