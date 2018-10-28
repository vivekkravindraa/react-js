class Customer {
    constructor(data) {
        this.firstName = data.firstName;
        this.balance = data.balance;
    }
    showDetails() {
        return `${this.firstName} - ${this.balance} INR`;
    }
    transaction(code, amount) {
        if(code == 1) {
            if(amount >= this.balance) {
                return `insufficient balance`;
            } else {
                this.balance = this.balance - amount;
                return this.showDetails();
            }
        } else if(code == 0) {
            this.balance = this.balance + amount;
            return this.showDetails();
        }
    }
}

let c1 = new Customer({firstName: 'Vivek', balance: 1000});

console.log(c1.showDetails());

c1.transaction(1,500);
console.log(c1.showDetails());

c1.transaction(0,2000);
console.log(c1.showDetails());

console.log(c1.transaction(1,4000));
console.log(c1.showDetails());