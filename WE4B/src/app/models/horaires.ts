export class Horaires{
    constructor(
        
        public lundi: string = "12h - 14h / 19h - 22h",
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
}