const customer = {
  name: "John Doe",
  balance: 1000,
};

customer.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
    return `Deposited $${amount}. New balance is $${this.balance}.`;
  } else {
    return "Invalid deposit amount. Please enter a positive amount.";
  }
};

customer.withdraw = function (amount) {
  if (amount > 0) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawn $${amount}. New balance is $${this.balance}.`;
    } else {
      return "Invalid withdrawal amount. Please enter a positive amount.";
    }
  }
};

console.log(customer.deposit(500));
console.log(customer.withdraw(200));
console.log(customer.deposit(-100));
console.log(customer.withdraw(1000));
