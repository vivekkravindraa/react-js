class Capital {
	constructor(a) {
		this.a = a;
	}
	capitalize() {
		if(this.a.length == 0) {
			return 'empty string';
		}
		let words = this.a.split(' ');
        let result = words.map(word => word[0].toUpperCase() + word.slice(1));
        return result.join(' ');
	}
	capitalizeWords() {
		return this.capitalize();
	}
}

function capitalizeWords(a){
	let c = new Capital(a);
	return c.capitalizeWords();
}

console.log(capitalizeWords('js string exercises'));