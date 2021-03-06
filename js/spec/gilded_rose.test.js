'use strict'

const {Item, Shop} = require('../src/gilded_rose')

describe('Gilded Rose', function () {

    const items = []
    items.push(new Item('+5 Dexterity Vest', 10, 20))
    items.push(new Item('Aged Brie', 2, 0))
    items.push(new Item('Elixir of the Mongoose', 5, 7))
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
    items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49))
    // this conjured item does not work properly yet
    items.push(new Item('Conjured Mana Cake', 3, 6))

    it('should foo', function () {
        // Given
        const gildedRose = new Shop([new Item('foo', 0, 0)])

        // When
        const items = gildedRose.updateQuality()

        // Then
        expect(items[0].name).toEqual('fixme')
    })

})
