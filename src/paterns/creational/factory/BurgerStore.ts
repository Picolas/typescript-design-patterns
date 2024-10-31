import {BurgerFactory} from "./BurgerFactory";
import {Burger} from "./Burger";
import {CheeseBurger} from "./CheeseBurger";
import {DeluxeBurger} from "./DeluxeBurger";

export class BurgerStore extends BurgerFactory {
    createBurger(type: string): Burger {
        switch (type) {
            case 'CheeseBurger':
                return new CheeseBurger();
            case 'DeluxeBurger':
                return new DeluxeBurger()
            default:
                return new CheeseBurger();
        }
    }
}