class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0}

    makeDeposit(amount) {
        this.accountBalance += amount}

    makeWithdrawal(amount) {
        this.accountBalance -= amount}

    displayBalance() {
        console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`)}

    transferMoney(amount, recipient) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount
            recipient.accountBalance += amount
            console.log(`Transfer successful! ${this.name} transferred $${amount} to ${recipient.name}.`)
            console.log(`${this.name}'s new account balance: $${this.accountBalance}`)
            console.log(`${recipient.name}'s new account balance: $${recipient.accountBalance}`)
        } else {
            console.log(`$${amount} transfer failed! ${this.name} had insufficient funds.`)}}

}

const ren = new User("Ren Hoek", "ren@blamo.com")
const stimpy = new User("Stimpy Cat", "stimpy@blamo.com")
const log = new User("Log Wood", "log@bigheavywood.com")

ren.makeDeposit(100)
ren.makeDeposit(50)
ren.makeDeposit(200)
ren.makeWithdrawal(75)

stimpy.makeDeposit(400)
stimpy.makeDeposit(250)
stimpy.makeWithdrawal(100)
stimpy.makeWithdrawal(25)

log.makeDeposit(500)
log.makeWithdrawal(20)
log.makeWithdrawal(10)
log.makeWithdrawal(20)

ren.displayBalance()
stimpy.displayBalance()
log.displayBalance()

ren.transferMoney(200, log)
