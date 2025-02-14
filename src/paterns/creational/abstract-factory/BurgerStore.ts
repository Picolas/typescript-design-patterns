import {BurgerFactory} from "./BurgerFactory";
import {Burger} from "./Burger";

export class BurgerStore {
    private _factory: BurgerFactory;

    constructor(factory: BurgerFactory) {
        this._factory = factory;
    }

    orderBurger(): Burger {
        return this._factory.createBurger();
    }

}