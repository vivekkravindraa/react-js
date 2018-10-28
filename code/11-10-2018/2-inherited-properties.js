// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function inheritedProperties(a) {
	return Object.getOwnPropertyNames(a);
}

const a = { name: 'vivek'}
console.log(inheritedProperties(a));