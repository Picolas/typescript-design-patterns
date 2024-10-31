export interface Ingredient {
    type: string,
    number: number
}

export class Burger {
    private _name: string;
    ingredients: Ingredient[] = []
    /*
    cheese: number;
    salad: number;
    steak: number;
    oignon: number;
    sauce: number;
    bun: number;
     */

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    getIngredients() {
        this.ingredients.forEach(ingredient => {
            console.log(`${ingredient.number} ${ingredient.type}`)
        })
    }
}