const Item = require('./Item')

describe('Item', () => {
	it('should set properties correctly', () => {
		const name = 'test item'
		const weight = 5

		const item = new Item(name, weight)

		expect(item.name).toBe(name)
		expect(item.weight).toBe(weight)
	})
})
