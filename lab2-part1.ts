

class CheckingAccount {

    private initialBalance:number;
    private ownerName:string;

    constructor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
    }

    deposit(theDeposit:number) {
        this.initialBalance += theDeposit;
    }

    withdraw(theWithdraw:number) {
        this.initialBalance -= theWithdraw;
    }

    checkBalance() {
        console.log("Current Balance: "+ this.initialBalance);
        console.log("Account Holder: "+ this.ownerName);
    }
}