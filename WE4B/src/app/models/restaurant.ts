import { Horaires } from "./horaires";

export class Restaurant {
    constructor(
        public id: number,
        public id_gerant: number,
        public title: string,
        public description: string,
        public dateOfCreation: string,
        public adress: string,
        public city: string,
        public phone: number,
        public note: number,
        public img: string,
        public likes: number,
        public menu: string,
        public horaires: Horaires = new Horaires(),
        public capacite: number,) {
        this.id = id;
        this.id_gerant = id_gerant;
        this.description = description;
        this.title = title;
        this.dateOfCreation = dateOfCreation;
        this.adress = adress;
        this.note = note;
        this.img = img;
        this.likes = likes;
        this.horaires = horaires;
        this.capacite = capacite;
    }
}
