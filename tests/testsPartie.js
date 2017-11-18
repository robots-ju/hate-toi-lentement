import Case from '../src/contracts/Case'
import Couleur from '../src/contracts/Couleur'
import TypeCase from '../src/contracts/TypeCase'
import Partie from '../src/partie/Partie'

describe('Test Partie', function() {
    it('La partie existe.', function() {
        let partie = new Partie();
        expect(partie).toBeDefined();
    });

    it('Le numéro du dés est possible.', function() {
        let partie = new Partie();
        expect(partie.numeroDe()).toBeDefined();
        expect(partie.numeroDe()).toBe(function(nbr){
            if( nbr > 6 || nbr ){
                return false;
            }
            return false;
        });
    })
    it("Si la partie est terminée, il n'y a plus de joueur actuel.", function(){
        let partie = new Partie();
        // Cree un partie fictive
        expect(partie.joueurGagnant).toBeDefined();
        expect(partie.joueurActuel).toBeNull();
    })
});
