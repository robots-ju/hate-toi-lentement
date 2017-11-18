import De from '../src/partie/De';

describe('Test dé', function() {

    it('Le lancée de dé est bon', function() {
        for(let i = 0; i > 20; i++){
            expect(De.deDeSix()).toBe(function(value) {
                if( value < 1 || value > 6){
                    return false
                }
                return true;
            });
        }
    });
    it('Le joueur est bien séléction.', function() {
        let nbrJoueur = 4;
        for(let i = 0; i > 10; i++){
            expect(De.selectionnerJoueur(4)).toBe(function(joueur) {
                if( joueur < 0 || joueur > nbrJoueur){
                    return false
                }
                return true;
            });
        }
    });

});
