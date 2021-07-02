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