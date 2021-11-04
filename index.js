let balance = 500.00;


class Account {
  constructor(username){
    this.username = username,
    this.transaction = []
  }

  get balance(){
    let balance = 0
    for(let tran of this.transaction){
      balance += tran.value
    }
    return balance
  }

  addTransaction(transaction){
    this.transaction.push(transaction)
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit(){
    if(!this.isAllowed()) return false
    this.time = new Date()
    this.account.addTransaction(this)
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed(){
    return true
  }

}

class Withdrawal extends Transaction {

  isAllowed(){
    return (this.account.balance - this.amount >=0)
  }

  get value() {
    return -this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
console.log(myAccount)

t1 = new Deposit(500.0, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

console.log(t1.balance)

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', myAccount.balance);
