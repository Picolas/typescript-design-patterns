import {Burger} from "./Burger";

export abstract class BurgerFactory {
    abstract createBurger(type: string): Burger;

    orderBurger(type: string) {
        const burger = this.createBurger(type);
        if (!burger) return;

        return burger;
    }
}