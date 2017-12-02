import ContratJoueur from '../contracts/Joueur';

/**
 * Ce joueur est une classe très simple qui ne réagit à aucune commande
 * À utiliser dans les tests
 */
export default class JoueurQuiFaitRien extends ContratJoueur {
    constructor() {
        super();
    }

    debutPartie(partie, couleur) {
        // Ne fait rien
    }

    jouer() {
        // Ne fait rien
    }
}
