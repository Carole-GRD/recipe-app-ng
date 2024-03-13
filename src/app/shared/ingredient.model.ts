// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }


// Raccourci TypeScript pour la création de classes :

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}