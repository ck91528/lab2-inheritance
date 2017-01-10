

class SavingsAccount {

    private initialBalance:number;
    private ownerName:string;
    private limit = 0; 

    constructor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
    }

    deposit(theDeposit:number) {
        this.initialBalance += theDeposit;
    }

    withdraw(theWithdraw:number) {
        if (this.limit < 3) {
            this.initialBalance -= theWithdraw;
            this.limit++;
        } 
        else {
            console.log("No more money for you");
        }
    }

    checkBalance() {
        console.log("Current Balance: "+ this.initialBalance);
        console.log("Account Holder: "+ this.ownerName);
    }
}