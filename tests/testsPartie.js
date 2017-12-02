import Case from '../src/contracts/Case'
import Couleur from '../src/contracts/Couleur'
import TypeCase from '../src/contracts/TypeCase'
import Partie from '../src/partie/Partie'

describe('Test Partie', function() {
    it('Une partie peut être créée', function() {
        const partie = new Partie();
        expect(partie).toBeDefined();
    });

    it('La function deplacerUnPion() renvoie une exception quand les deux cases ne sont pas valides', function(){
        const partie = new Partie();

        expect(() => partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 0),
            new Case(Couleur.Bleu, TypeCase.Case, 0))
        ).toThrow('Pas possible');
        expect(() => partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 0),
            new Case(Couleur.Jaune, TypeCase.Case, 0))
        ).toThrow('Pas possible');
        expect(() => partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Case, 3),
            new Case(Couleur.Jaune, TypeCase.Case, 0))
        ).toThrow('Pas possible');
        expect(() => partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Base, 0),
            new Case(Couleur.Jaune, TypeCase.Base, 0))
        ).toThrow('Pas possible');
        expect(() => partie.deplacerUnPion(
            new Case(Couleur.Jaune, TypeCase.Arrivee, 0),
            new Case(Couleur.Jaune, TypeCase.Arrivee, 0))
        ).toThrow('Pas possible');
    });

    it('Si la partie est terminée, la function partieTerminee() = true', function(){
        const partie = new Partie();
        // Cree une partie fictive
        expect(partie.partieTerminee()).toEqual(true);
    })

    it('Si la partie est terminée, il n\'y a plus de joueur actuel', function(){
        const partie = new Partie();
        // Cree une partie fictive
        expect(partie.joueurGagnant()).not.toBeNull();
        expect(partie.joueurActuel()).toBeNull();
    })

    it('La couleur suivante est retournée', function() {
        const partie = new Partie();

        expect(partie._couleurSuivante(Couleur.Jaune)).toBe(Couleur.Rouge);
        expect(partie._couleurSuivante(Couleur.Rouge)).toBe(Couleur.Vert);
        expect(partie._couleurSuivante(Couleur.Vert)).toBe(Couleur.Bleu);
        expect(partie._couleurSuivante(Couleur.Bleu)).toBe(Couleur.Jaune);
    });

    it('Personne ne doit avoir gagné au début d\'une partie', function(){
        const partie = new Partie();

        expect(partie.joueurGagnant()).toBeNull();
    });
});
