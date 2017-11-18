import De from '../src/partie/De'

describe('Test dé', function() {
    it('Le dé existe.', function() {
        let de = new De();
        expect(de).toBeDefined();
    });

});
