USE restaurants;

CREATE TABLE restaurant(
  restaurant_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  dateOfCreation DATETIME NOT NULL,
  address VARCHAR(255) NOT NULL,
  note VARCHAR(255) NOT NULL,
  img VARCHAR(255) NOT NULL,
  likes INT NOT NULL,
)


INSERT INTO restaurant (title, description, dateOfCreation, address, note, img, likes) VALUES 
("Auberge-fleurie", "Cuisine Française, Européenne", "2022-01-13", "41 rue des acacias",4.5,"./assets/img/1.jpg",0),
("Les Capucins", "Cuisine Française, Européenne", "2022-01-13", "45 rue des tournesols",4.5,"./assets/img/2.jpg",0),
("Auberge la Gogoline", "Cuisine Française, Internationale", "2022-01-13", "23 rue des piverts",4.5,"./assets/img/3.jpg",0),
("Au Fil des Saisons", "Cuisine Française, Européenne", "2022-01-13", "89 rue des arbres violets",4.5,"./assets/img/4.jpg",0),
("Le Saint Martin", "Cuisine Française, Européenne", "2022-01-13", "78 rue des points",4.5,"./assets/img/5.jpg",0);
