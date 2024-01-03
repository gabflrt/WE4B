import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { Horaires } from '../models/horaires';

@Component({
  selector: 'app-formcrearesto',
  templateUrl: './formcrearesto.component.html',
  styleUrls: ['./formcrearesto.component.css']
})
export class FormcrearestoComponent implements OnInit {
  restaurant = {
    id: 0,
    title: '',
    description: '',
    dateOfCreation: '',
    adress: '',
    city: '',
    phone: 0,
    note: 0,
    img: '',
    likes: 0,
    menu: '',
    horaires: new Horaires(),
    capacite: 0
  };
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  addRestaurant() {
    this.errorMessage = null;
    this.successMessage = null;
    console.log("dans fonction");

    if (!this.restaurant.title || !this.restaurant.description || !this.restaurant.adress || !this.restaurant.city || !this.restaurant.img || !this.restaurant.horaires) {
      this.errorMessage = 'Tous les champs doivent être remplis.';
      console.log("erreur champs");
    } else {
      this.restaurantService.addRestaurant(this.restaurant).subscribe(response => {
        if (response) {
          console.log('Restaurant creation succeeded');
          this.successMessage = 'Le restaurant a bien été enregistré.';
        } else {
          console.log('Restaurant creation failed');
          this.errorMessage = 'L\'enregistrement du restaurant a échoué. Veuillez réessayer.';
        }
      }, error => {
        console.log('Restaurant creation failed');
        this.errorMessage = 'L\'enregistrement du restaurant a échoué. Veuillez réessayer.';
      });
    }
  }

  handleFileInput(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.restaurant.img = URL.createObjectURL(file);
    }
  }

}
