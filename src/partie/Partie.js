import ContratPartie from '../contracts/Partie';
import Couleur from '../contracts/Couleur';
import TypeCase from '../contracts/TypeCase';

const CASES_SECURITE = [0, 5, 12];
const NOMBRE_CASES_DEPART = 4;
const NOMBRE_CASES_ARRIVEE = 8;
const NOMBRE_CASES_STANDARD = 17;
const NOMBRE_VALEURS_DE = 6;

export default class Partie extends ContratPartie {
    constructor() {
        super();

        // L'état de la partie est stocké dans un tableau tridimensionnel
        // les cases contiennent la référence `Couleur` du pion ou `null` si vide
        this.plateau = Object.keys(Couleur).map(keyCouleur => {
            return {
                couleur: Couleur[keyCouleur],
                types: Object.keys(TypeCase).map(keyTypeCase => {
                    return {
                        type: TypeCase[keyTypeCase],
                        cases: (() => {
                            switch (keyTypeCase[TypeCase]) {
                                case TypeCase.Depart:
                                    return (new Array(NOMBRE_CASES_DEPART)).fill(couleur);
                                case TypeCase.Arrivee:
                                    return (new Array(NOMBRE_CASES_ARRIVEE)).fill(null);
                                case TypeCase.Case:
                                    return (new Array(NOMBRE_CASES_STANDARD)).fill(null);
                            }
                        })(),
                    };
                }),
            };
        });

        this.couleursJoueurs = [
            Couleur.Jaune,
            Couleur.Bleu,
        ];

        this.valeurDe = null;
        this.indexJoueurActuel = null;
        this.aJoue = false

        this._passeAuProchainJoueur();
    }

    _passeAuProchainJoueur() {
        if (this.indexJoueurActuel === null) {
            this.indexJoueurActuel = 0;
        } else {
            this.indexJoueurActuel = (this.indexJoueurActuel + 1) % this.couleursJoueurs.length;
        }

        // Valeur de 1 à NOMBRE_VALEURS_DE
        this.valeurDe = Math.floor(Math.random() * NOMBRE_VALEURS_DE) + 1;
    }

    _couleurSuivante(couleur) {
        const ordreCouleurs = [
            Couleur.Jaune,
            Couleur.Rouge,
            Couleur.Vert,
            Couleur.Bleu,
        ];

        const index = ordreCouleurs.indexOf(couleur);

        return ordreCouleurs[(index + 1) % ordreCouleurs.length];
    }

    confirmerAvoirJoue(){
        if(this.aJoue){
            this._passeAuProchainJoueur();
            this.aJoue=false;
        }else{
            throw "pas encore joué";
        }
    }

    numeroDe(){
        return this.valeurDe;
    }

    joueurActuel(){
        return this.couleursJoueurs[this.indexJoueurActuel]
    }

    contenuCase(emplacement){
        return this.plateau[emplacement.quadrant][emplacement.type][emplacement.numeroCase]
    }
}
