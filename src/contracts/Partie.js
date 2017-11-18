export default class Partie {
    /**
     * @param Case caseDepart
     * @param Case caseArrivee
     * @returns void
     */
    deplacerUnPion(caseDepart, caseArrivee) {
        throw 'Non implémenté';
    }
    /**
     * @returns void
     */
    confirmerAvoirJoue() {
        throw 'Non implémenté';
    }
    /**
     * @returns int
     */
    numeroDe() {
        throw 'Non implémenté';
    }
    /**
     * @returns bool
     */
    partieTerminee() {
        throw 'Non implémenté';
    }
    /**
     * @returns Couleur|null
     */
    joueurGagnant() {
        throw 'Non implémenté';
    }
    /**
     * @returns Couleur|null
     */
    joueurActuel() {
        throw 'Non implémenté';
    }
    /**
     * @param Case emplacement
     * @returns Couleur|null
     */
    contenuCase(emplacement) {
        throw 'Non implémenté';
    }
    /**
     * @param Couleur couleur
     * @returns Array<Case>
     */
    casesPion(couleur) {
        throw 'Non implémenté';
    }
    /**
     * @param Joueur joueur
     * @returns void
     */
    ajouterJoueur(joueur) {
        throw 'Non implémenté';
    }
}
