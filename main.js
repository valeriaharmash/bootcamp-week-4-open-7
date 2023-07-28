const Person = require('./classes/Person')
const Player = require('./classes/Player')
const NPC = require('./classes/NPC')

function main() {
	let person1 = new Person('Bob', 'Cleric')
	console.log(person1)
	console.log(person1.introduce())

	let person2 = new Person('Eva', 'Bard', [1, 1])
	person2.updateX(3)
	person2.updateY(5)
	console.log(person2)

	let player = new Player('Bertha', 'Cat', [5, 5], 'Claws')

	console.log(player.name)
	console.log(player.weapon)

	let npc1 = new NPC('Bella', 'cat', [7, 8])

	console.log(NPC.NPC_COUNT)
	console.log(NPC.tellTime())

	person1.drinkPotion(200)
	console.log('health>>>', person1.getHealth())

	console.log('health>>>', person1.takeDamage(200))
}

main()
