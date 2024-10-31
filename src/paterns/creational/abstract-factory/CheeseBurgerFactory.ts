import {BurgerFactory} from "./BurgerFactory";
import {Burger} from "./Burger";
import {CheeseBurger} from "./CheeseBurger";

export class CheeseBurgerFactory implements BurgerFactory {
    createBurger(): Burger {
        return new CheeseBurger();
    }
}