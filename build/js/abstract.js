"use strict";
/**
 * Abtract Class:
 * --- The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members.
 * --- When a class doesn’t have any abstract members, it is said to be concrete.
 * Abtract Method:
 * --- An abstract method or abstract field is one that hasn’t had an implementation provided.
 * --- These members must exist inside an abstract class, which cannot be directly instantiated.
 */
// abstract class Hero {
//     hunger: number;
//     health: number;
//     abstract attack(): void;
//     move(): void {
//         console.log("I'm moving")
//     }
//     eat(): void {
//         console.log("I'm eating")
//     }
// }
// abstract class Mage extends Hero {
//     mana: number;
// }
// class Wizard extends Mage {
//     attack(): void {
//         this.mana -= 1;
//         console.log('Wizard attack')
//     }
// }
// class Wtich extends Mage {
//     attack(): void {
//         this.mana -= 1;
//         console.log('Witch attacks')
//     }
// }
// class Archer extends Hero {
//     arrows: number;
//     attack() {
//         // super.attack();
//         console.log("Firing an arrow");
//         this.arrows -= 1;
//     }
// }
// class Mage extends Hero {
//     mana: number;
//     attack() {
//         console.log("Throwing a potion");
//         this.mana -= 1;
//     }
// }
// class Knight extends Hero {
//     shield: number;
//     attack(): void {
//         console.log("Im singing with a sword")
//     }
// }
// const archer: Archer = new Archer();
// const knight: Knight = new Knight();
// This one cannot be allowed
// const bob: Hero = new Hero();
