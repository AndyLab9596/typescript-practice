"use strict";
/**
 * --- private: only access the property within the master class,
 * the sub class which inherited from the master class cannot access it.
 * --- protected: the property can be accessed with the master class as well as the sub class.
 * --- Multiple level extending
 * --- Inheritance method from master class to sub class
 */
class Animal {
    setCoordX(x) {
        this.coordX = x;
    }
    setCoordY(y) {
        this.coordY = y;
    }
    eat() {
        console.log('Eating');
    }
    sleep() {
        console.log('Sleeping');
    }
    move() {
        console.log('Moving');
    }
    makeNoise() {
        console.log('Make Noise');
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log('bark');
    }
    returnToOwner() {
        console.log(`I'm at ${this.coordX}, ${this.coordY} returning to owner`);
    }
    move() {
        console.log('getting up on all for paws');
        super.move();
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log('meow');
    }
}
class Wolf extends Animal {
}
class Canine extends Animal {
}
const dog = new Dog();
dog.makeNoise();
dog.setCoordX(10);
dog.setCoordY(10);
dog.returnToOwner();
dog.move();
const cat = new Cat();
cat.makeNoise();
const wolf = new Wolf();
