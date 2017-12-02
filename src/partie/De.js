import ContratDe from '../contracts/De';

export default class De extends ContratDe {
    deDeSix(){
        return Math.floor(Math.random() * 6) + 1;
    }
    selectionnerJoueurs(nombreJoueurs){
        return Math.floor(Math.random() * nombreJoueurs);
    }
}
