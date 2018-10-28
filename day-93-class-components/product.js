class Product {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
    }
    details() {
        return `${this.name} - ${this.price}`;
    }
}

let p1 = new Product({
    name: 'Marker', price: 25
});

console.log(p1.details());

class Book extends Product {
    // class 'Book' shares the properties and methods of class 'Product'
    constructor(data) {
        // super keyword inside the constructor shares all the properties from class 'Product'
        super(data);
        this.author = data.author;
        this.pages = data.pages;
    }
    details() {
        // super keyword inside a method shares the method called on super keyword from class 'Product' 
        return `${super.details()} - ${this.author} - ${this.pages}`;
    }
}

let b1 = new Book({
    name: 'Day of the jackal', price: 250, author: 'Fredrick', pages: 100
})

console.log(b1.details());

class Mobile extends Product {
    constructor(data) {
        super(data);
        this.model = data.model;
        this.manufacturer = data.manufacturer;
    }
    details() {
        return `${super.details()} - ${this.model} - ${this.manufacturer}`;
    }
}

let m1 = new Mobile({
    name: 'Iphone XS', price: 125, model: 'Iphone', manufacturer: 'Apple'
})

console.log(m1.details());