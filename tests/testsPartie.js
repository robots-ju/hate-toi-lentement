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

    it('La fonction deplacerUnPion() est définie', function(){
        let partie = new Partie();
        expect(partie.deplacerUnPion()).toBeDefined();
    })

    it('La function deplacerUnPion() renvoie une exception quand les deux cases ne sont pas valides', function(){
        let partie = new Partie();
        expect(partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 0),
            new Case(Couleur.Bleu, TypeCase.Case, 0))
        ).toThrowError();
        expect(partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 0),
            new Case(Couleur.Jaune, TypeCase.Case, 0))
        ).toThrowError()
        expect(partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 3),
            new Case(Couleur.Jaune, TypeCase.Case, 0))
        ).toThrowError()
        expect(partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Base, 0),
            new Case(Couleur.Jaune, TypeCase.Base, 0))
        ).toThrowError()
        expect(partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Arrivee, 0),
            new Case(Couleur.Jaune, TypeCase.Arrivee, 0))
        ).toThrowError()

    });

    it('Si la partie est terminée, la function partieTerminee() = true', function(){
        let partie = new Partie();
        // Cree une partie fictive
        expect(partie.partieTerminee()).toEqual(true);
    })

    it("Si la partie est terminée, il n'y a plus de joueur actuel.", function(){
        let partie = new Partie();
        // Cree une partie fictive
        expect(partie.joueurGagnant).toBeDefined();
        expect(partie.joueurActuel).toBeNull();
    })

});
