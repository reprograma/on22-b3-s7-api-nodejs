const checkParity = (number) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(!isNaN(number)) {
                const result = number % 2 == 0
                resolve(result)
            } else {
                reject("The informed number is not valid.")
            }
        }, 2500)
    })
}

checkParity("2")
    .then((result) => {
        console.log(`Result: ${result ? 'even' : 'odd'}`)
    })
    .catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log("End.")
    })