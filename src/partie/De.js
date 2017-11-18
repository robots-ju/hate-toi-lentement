import ContratDe from '../contracts/De';

export class De extends ContratDe {
    deDeSix(){
        return Math.floor(Math.random() * 6) + 1;
    }
    selectionnerJouers(nombreJoueurs){
        return Math.floor(Math.random() * nombreJoueurs);
    }
}