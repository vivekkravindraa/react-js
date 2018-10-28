class Append {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    stringAppend() {
        return this.a.concat(this.b);
    }
}

function appendToString(a,b){
    let app = new Append(a,b);
    return app.stringAppend();
}

console.log(appendToString("Hello", " World!"));    // "Hello World!"
console.log(appendToString("Foo", "bar"));          // "Foobar"
console.log(appendToString("bar", "Foo"));          // "barFoo"
console.log(appendToString("", "test"));            // "test"
console.log(appendToString("other test", ""));      // "other test"