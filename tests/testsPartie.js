import Case from '../src/contracts/Case'
import Couleur from '../src/contracts/Couleur'
import TypeCase from '../src/contracts/TypeCase'
import Partie from '../src/partie/Partie'

describe('Test Partie', function() {
    it('La partie existe', function() {
        let partie = new Partie();
        expect(partie).toBeDefined();
    });
});
