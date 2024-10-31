import {BurgerFactory} from "./BurgerFactory";
import {Burger} from "./Burger";
import {DeluxeBurger} from "./DeluxeBurger";

export class DeluxeBurgerFactory implements BurgerFactory {
    createBurger(): Burger {
        return new DeluxeBurger();
    }
}