class Weight {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
	findingWeight() {
		let alphabets = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26};
		// console.log(alphabets);

		let aCount = 0;
		let bCount = 0;

		let aValue = this.a.split('');
		// console.log(aValue);
		aValue.map((item) => {
			return aCount += alphabets[item];
		})
		
		let bValue = this.b.split('');
		// console.log(bValue);
		bValue.map((item) => {
			return bCount += alphabets[item];
		})

		if(aCount > bCount) {
			return 1;
		} else if(bCount > aCount) {
			return 2;
		} else {
			return 'equal'
		}
	}
	determineWeight() {
		return this.findingWeight();
	}
}

function strWeight(a,b){
	let weight = new Weight(a,b);
	return weight.determineWeight();
}

console.log(strWeight('batman','superman'));
console.log(strWeight('superman','batman'));
console.log(strWeight('batman','batman'));