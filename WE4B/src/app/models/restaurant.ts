import { Horaires } from "./horaires";

export class Restaurant {
    constructor (
    public id: number,
    public title: string,
    public description: string,
    public dateOfCreation: string,
    public adress: string,
    public note: number,
    public img: string,
    public likes:number,
    public horaires:Horaires,
    public capacite: number,) {
    this.id = id;
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
    