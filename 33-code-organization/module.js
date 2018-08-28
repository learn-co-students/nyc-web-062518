function generateBankAccount() {
    let balance = 100

    function getCash(requestedAmount) {
        balance = balance - requestedAmount
        return requestedAmount
    }
    function withdrawal(requestedAmount) {
        if (requestedAmount <= balance) {
            return getCash(requestedAmount)
        } else {
            return `Not enough cash`
        }
    }

    const publicAPi = {
        withdrawal
    }

    return publicAPi
}

const myBankAccount = generateBankAccount()
//debugger