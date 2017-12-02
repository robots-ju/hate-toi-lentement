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
     * @param Couleur couleur
     * @param Joueur joueur
     * @returns void
     */
    ajouterJoueur(couleur, joueur) {
        throw 'Non implémenté';
    }
    /**
     * @returns object Couleur => Joueur
     */
    joueurs() {
        throw 'Non implémenté';
    }
    /**
     * @returns object
     */
    exporterEtat() {
        throw 'Non implémenté';
    }
    /**
     * @returns object
     */
    importerEtat() {
        throw 'Non implémenté';
    }
    /**
     * @returns void
     */
    commencerJeu() {
        throw 'Non implémenté';
    }
}
