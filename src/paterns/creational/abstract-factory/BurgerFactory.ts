import {Burger} from "./Burger";

export interface BurgerFactory {
    createBurger(): Burger;
}