export class Horaires{
    constructor(
    
        //Horaires par défaut, si aucun horaire n'a été renseigné
        public  lundi: string = "12h - 14h / 19h - 22h",
        public mardi: string = "12h - 14h / 19h - 22h",
        public mercredi: string = "12h - 14h / 19h - 22h",
        public jeudi: string = "12h - 14h / 19h - 22h",
        public vendredi: string = "12h - 14h / 19h - 22h",
        public samedi: string = "12h - 14h / 19h - 22h",
        public dimanche: string = "12h - 14h / 19h - 22h"
    ){
        this.lundi = lundi;
        this.mardi = mardi;
        this.mercredi = mercredi;
        this.jeudi = jeudi;
        this.vendredi = vendredi;
        this.samedi = samedi;
        this.dimanche = dimanche;
    }

    getDay(day: number): string{
        switch(day){
            case 0: return this.lundi;
            case 1: return this.mardi;
            case 2: return this.mercredi;
            case 3: return this.jeudi;
            case 4: return this.vendredi;
            case 5: return this.samedi;
            case 6: return this.dimanche;
            default: return "fermé";
        }
    }

     
}