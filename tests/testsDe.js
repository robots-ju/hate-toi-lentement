import De from '../src/partie/De';

describe('Test dé', function() {

    it('Le lancé de dé est bon', function() {
        const de = new De();

        for (let i = 0; i < 50; i++) {
            const valeur = de.deDeSix();

            expect(valeur).toBeGreaterThanOrEqual(0);
            expect(valeur).toBeLessThanOrEqual(6);
        }
    });

    it('Le dé sélectionne un joueur valide', function() {
        const de = new De();
        const nombreJoueur = 4;

        for (let i = 0; i < 50; i++) {
            const joueur = de.selectionnerJoueurs(nombreJoueur);

            expect(joueur).toBeGreaterThanOrEqual(0);
            expect(joueur).toBeLessThan(nombreJoueur);
        }
    });

});
