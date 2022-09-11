var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#newDeck', function() {
        it('should return the suits and values of cards in the deck', function () {
            var new Card = newDeck()
            expect(new Card).to.equal(newDeck)
        });

        it('should throw and error if the suits and values are not both present', function() {
            expect(function() {
                newDeck(SUITS, VALUES);
            }).to.throw(Error)
        });
    });
});