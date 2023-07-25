const Person = require('./Person')

function main() {
	let person1 = new Person('Bob', 'Cleric')
	console.log(person1)
	console.log(person1.introduce())

	let person2 = new Person('Eva', 'Bard', [1, 1])
	person2.updateX(3)
	person2.updateY(5)
	console.log(person2)
}

main()
