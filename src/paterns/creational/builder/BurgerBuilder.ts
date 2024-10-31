import {Burger} from "./Burger";

export class BurgerBuilder {

    private readonly _burger: Burger;

    constructor(burger: Burger) {
        this._burger = burger
    }

    addCheese() {
        this._burger.addIngredient({
            type: 'Cheese',
            number: 1,
        })

        return this;
    }

    addBun() {
        this._burger.addIngredient({
            type: 'Bun',
            number: 1,
        })

        return this;
    }

    addSteak() {
        this._burger.addIngredient({
            type: 'Steak',
            number: 1,
        })

        return this;
    }

    addSalad() {
        this._burger.addIngredient({
            type: 'Salad',
            number: 1,
        })

        return this;
    }

    addOignon() {
        this._burger.addIngredient({
            type: 'Oignon',
            number: 1,
        })

        return this;
    }

    build() {
        return this._burger;
    }
}