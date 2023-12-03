export class Restaurant {
    constructor (
    public restaurant_id: number,
    public title: string,
    public description: string,
    public dateOfCreation: string,
    public adress: string,
    public note: number,
    public img: string) {
    this.restaurant_id = restaurant_id;
    this.description = description;
    this.title = title;
    this.dateOfCreation = dateOfCreation;
    this.adress = adress;
    this.note = note;
    this.img = img;
    }
    }
    