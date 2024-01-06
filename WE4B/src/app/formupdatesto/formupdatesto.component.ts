import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { Horaires } from '../models/horaires';
import { SessionService } from '../session.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formupdatesto',
  templateUrl: './formupdatesto.component.html',
  styleUrls: ['./formupdatesto.component.css']
})
export class FormupdatestoComponent {
  restaurant = {
    id: 0,
    id_gerant: 1,
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

  constructor(private restaurantService: RestaurantService, private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurant.id_gerant = this.sessionService.getSessionId();
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const restaurantId = Number(id);
      this.restaurantService.getRestaurantFromId(restaurantId).subscribe(restaurant => {
        this.restaurant = restaurant;
      });

    }
  }

  updateRestaurant() {
    this.errorMessage = null;
    this.successMessage = null;
    console.log("dans fonction");

    if (!this.restaurant.title || !this.restaurant.description || !this.restaurant.adress || !this.restaurant.city || !this.restaurant.img) {
      this.errorMessage = 'Tous les champs doivent être remplis.';
      console.log("erreur champs");
    } else {
      this.restaurantService.updateRestaurant(this.restaurant).subscribe(response => {
        if (response) {
          console.log('Restaurant update succeeded');
          this.successMessage = 'Le restaurant a bien été mis à jour.';
        } else {
          console.log('Restaurant update failed');
          this.errorMessage = 'La mise à jour du restaurant a échoué. Veuillez réessayer.';
        }
      }, error => {
        console.log('Restaurant update failed');
        this.errorMessage = 'La mise à jour du restaurant a échoué. Veuillez réessayer.';
      });
    }
  }

  handleFileInput(event: Event) {
    // Malheureusement trop lourd et stockage sur serveur impossible avec json-server
    // const file = (event.target as HTMLInputElement)?.files?.[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     this.restaurant.img = reader.result as string;
    //   };
    //   reader.readAsDataURL(file);
    // }
    this.restaurant.img = "assets/img/1.jpg";
  }


}
