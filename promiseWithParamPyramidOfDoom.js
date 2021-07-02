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