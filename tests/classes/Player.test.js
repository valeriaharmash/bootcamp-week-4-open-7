const Player = require('../../classes/Player')
const Item = require('./Item')

describe('Player', () => {
	it('should add an item to a player inventory', () => {
		//arrange
		let player = new Player('John', 'rogue', [8, 2], 'duct tape')
		let item = new Item('potion', 2)

		//act
		player.addItem(item)

		//assert
		expect(player.inventory).toContain(item)
	})

	it('should not add an item if it is already in the inventory', () => {
		let player = new Player('John', 'rogue', [8, 2], 'duct tape')
		let item = new Item('potion', 2)
		player.addItem(item)

		expect(player.inventory).toHaveLength(1)
		expect(() => {
			player.addItem(item)
		}).toThrow('already in inventory.')
	})
})
