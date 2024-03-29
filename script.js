// ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static ageCompare(user1, user2) {
    if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più grande di ${user2.firstName}`);
    } else {
      console.log(`${user2.firstName} è più grande di ${user1.firstName}`);
    }
  }
}

const user1 = new User("Simone", "Criscenti", 20, "Sicilia");
const user2 = new User("Mario", "Rossi", 26, "Lazio");
const user3 = new User("Luigi", "Bros", 34, "Mario World");

User.ageCompare(user1, user2);
User.ageCompare(user2, user3);
User.ageCompare(user3, user1);

// ESERCIZIO 2

const petName = document.getElementById("pet-name");
const ownerName = document.getElementById("owner-name");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const send = document.getElementById("send");
const form = document.querySelector("form");

class Animal {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const animals = [];

form.onsubmit = function (e) {
  e.preventDefault();
  const animal = new Animal(petName.value, ownerName.value, species.value, breed.value);

  console.log(
    "Nome animale:",
    animal.petName,
    "Nome proprietario:",
    animal.ownerName,
    "Specie:",
    animal.species,
    "Razza:",
    animal.breed
  );
  const ul = document.querySelector("ul");
  const list = document.createElement("li");
  list.innerText =
    "Nome animale " +
    animal.petName +
    " Nome padrone: " +
    animal.ownerName +
    " Specie: " +
    animal.species +
    " Razza: " +
    animal.breed;
  ul.appendChild(list);
};
