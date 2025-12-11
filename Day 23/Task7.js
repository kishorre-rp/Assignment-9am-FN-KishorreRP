class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient Balance");
    }
  }
}

const account = new BankAccount(1000);
account.deposit(500);  
account.withdraw(2000);
