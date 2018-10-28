class Count {
    constructor() {
        this.count = 0;
    }
    up() {
        this.count++;
    }
    showCount() {
        return this.count;
    }
    down() {
        this.count--;
    }
}

let c1 = new Count();
c1.up();
c1.up();

console.log(c1.showCount());
c1.down();
console.log(c1.showCount());