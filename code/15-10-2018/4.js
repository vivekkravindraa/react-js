class MyCount {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
	countOccurence() {
        let count = 0;
        let subStrings = this.a.toLowerCase().split(' ');
        console.log(subStrings);
		subStrings.forEach((item) => {
            if(item == this.b) {
                count++;
            }
        })
        return count;
	}
}

function count(a,b) {
	let c = new MyCount(a,b);
	return c.countOccurence();
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));