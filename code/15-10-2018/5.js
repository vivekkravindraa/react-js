class Vowel {
	constructor(a) {
		this.a = a;
	}
	countVowel() {
		let count = 0;
		let vowels = ['a','e','i','o','u'];
		if(this.a.length == 0) {
			return 'empty string';
		}
		for(let i = 0; i < this.a.length; i++) {
			if(vowels.includes(this.a[i])) {
				 count++;
			}
		} 
		return count;
	}
}

function vowelCount(a) {
	let vow = new Vowel(a);
	return vow.countVowel();
}

console.log(vowelCount("Good Job"));
console.log(vowelCount('Yankees'));
console.log(vowelCount('symphysy'));