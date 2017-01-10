

class Account {
    
    public initialBalance:number;
    private ownerName:string;

    constructor(balance:number, name:string) {
        this.initialBalance = balance;
        this.ownerName = name;
    }

    deposit(theDeposit:number) {
        this.initialBalance += theDeposit;
    }

    checkBalance() {
        console.log("Current Balance: "+ this.initialBalance);
        console.log("Account Holder: "+ this.ownerName);
    }
}

class Checking extends Account {
    constructor(initialBalance:number, name:string) { super(initialBalance, name); }
    withdraw(theWithdraw:number) {
        this.initialBalance -= theWithdraw;
    }
} 

class Savings extends Account {
    private limit = 0;
    constructor(initialBalance:number, name:string) { super(initialBalance, name); }
    withdraw(theWithdraw:number) {
        if (this.limit < 3) {
            this.initialBalance -= theWithdraw;
            this.limit++;
        } 
        else {
            console.log("No more money for you");
        }
    }
}