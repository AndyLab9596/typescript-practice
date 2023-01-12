/**
 * Static Members : 
 * --- Classes may have static members. 
 * --- These members aren’t associated with a particular instance of the class. 
 * --- They can be accessed through the class constructor object itself:
 * 
 */

// class Character {
//     static characterCount = 0;
//     private hunger: number;
//     private health: number;

//     constructor(hunger: number, health: number) {
//         Character.characterCount += 1;
//         this.hunger = hunger;
//         this.health = health;
//     }

//     setHunger(huner: number) {
//         this.hunger = huner;
//     }

//     setHealth(health: number) {
//         this.health = health;
//     }

//     getHunger(): number {
//         return this.hunger;
//     }

//     getHealth(): number {
//         return this.health;
//     }
// }

// class Hero extends Character {
//     private heroId: number;

//     constructor(heroId: number, hunger: number, health: number) {
//         super(hunger, health);
//         this.heroId = heroId
//     }

//     setHeroId(heroId: number): void {
//         this.heroId = heroId
//     }

//     getHeroId(): number {
//         return this.heroId
//     }
// }

// const jeff = new Hero(1, 50, 100);
// console.log(jeff.getHeroId())
// console.log(jeff.getHunger())
// console.log(jeff.getHealth())