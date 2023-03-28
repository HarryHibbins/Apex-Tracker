const Model = require('../src/model')

describe('model', () => {
    it('Creates an empty array', () => {
        const model = new Model();
        expect(model.getPlayer()).toEqual = []
    })
})