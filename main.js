class Animal {
    legs = 2;
    has_fur;
    food = "";
  
    constructor(legs, fur, food) {
      this.legs = legs;
      this.has_fur = fur;
      this.food = food;
    }
  
    eat() {
      // Nom nom
    }
  
    speak() {
      console.log("I'm an Animal");
    }
}
  
class Dog extends Animal {
    has_fleas = false;

    constructor(food, fleas) {
        this.legs = 4;      // We still have a "legs" attribute
        this.has_fur = true;
        this.food = food;
        this.has_fleas = fleas;
    }

    speak() {
        console.log("WOOF!");
    }  
}