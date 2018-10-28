// es5 - object prototype / object constructor function

function Person(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    Person.data.push(this);

    // instance method
    this.fullName = function() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }

    // instance method
    this.greet = function() {
        return `Hi, this is ${this.firstName}`;
    }
}

// Static properties / variables
Person.data = [];

// Static methods
Person.race = function() {
    return `Person belongs to the human race`;
}

Person.all = function() {
    return Person.data;
}

var p1 = new Person({firstName: 'sachin', lastName: 'tendulkar'});
console.log(p1.fullName());
console.log(p1.greet());
console.log(Person.race());
console.log(Person.all());