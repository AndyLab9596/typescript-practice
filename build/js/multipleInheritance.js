"use strict";
/**
 * In order to have multiple inheritance by using interface, there's much be a trade-off,
 * which is the inherited capacity of the class
 */
// abstract class Character {
//     hunger: number;
//     health: number;
//     abstract eat(): void;
// }
// interface Hero extends Character {
//     heroId: number
// }
// interface Enemy extends Character {
//     enemyId: number;
// }
// class Spy implements Hero, Enemy {
//     hunger: number;
//     health: number;
//     heroId: number;
//     enemyId: number;
//     eat() {
//         this.hunger -= 1;
//     }
// }
// const hero: Hero = new Spy();
// const enemy: Enemy = new Spy();
