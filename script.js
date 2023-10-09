// ES: 1
// creating a class
class User {
   constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
   }

   userDetails() {
      return `${this.firstName} ${this.lastName} is ${this.age} years old and lives in ${this.location}`;
   }

   // function that compare age
   ageComparison(user2) {
      if (this.age > user2.age) {
         return `${this.firstName} is elder than ${user2.firstName}`;
      } else if (this.age < user2.age) {
         return `${user2.firstName} is elder than ${this.firstName}`;
      } else {
         return `${this.firstName} and ${user2.firstName} have same age`;
      }
   }
}

// adding user data into class
const firstUser = new User("Foo", "Daz", 25, "Nowhere");
const secondUser = new User("Bob", "Baa", 26, "Somewhere");
console.log("first user: ", firstUser.userDetails());
console.log("second user: ", secondUser.userDetails());
console.log("age comparison: ", firstUser.ageComparison(secondUser));

// **********************************************************
// ES: 2

class Pet {
   constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
   }

   hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName ? true : false;
   }
}

// class that holds a collection of pet classes
class ArrPets {
   constructor() {
      this.pets = [];
   }

   // create a new pet and save it in the collection
   addPet(petName, ownerName, species, breed) {
      let addPet = new Pet(petName, ownerName, species, breed);
      this.pets.push(addPet);
      return addPet;
   }

   get allPets() {
      return this.pets;
   }
}

let listOfPets = new ArrPets();
// listOfPets.addPet("Tom", "Mark", "dog", "bulldog");
// listOfPets.addPet("Baa", "Foo", "dog", "unknown");
// console.log("allpets: ", listOfPets.allPets);

const list = document.getElementById("list");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
   e.preventDefault();
   const petName = document.getElementById("pet-name").value;
   const ownerName = document.getElementById("owner-name").value;
   const species = document.getElementById("species").value;
   const breed = document.getElementById("breed").value;

   //  adding pet into list
   listOfPets.addPet(petName, ownerName, species, breed);
   list.innerHTML = "";

   //  updating the list in the DOM
   listOfPets.allPets.forEach((pet) => {
      list.innerHTML += ` <li class="list-group-item">Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}</li>`;
   });

   //  reseting form input
   form.reset();
});
