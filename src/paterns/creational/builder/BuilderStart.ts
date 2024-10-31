import {BurgerBuilder} from "./BurgerBuilder";
import {Burger} from "./Burger";

export class BuilderStart {
    constructor() {
        this.main()
    }

    main() {
        const burgerBuilder = new BurgerBuilder(new Burger('CheeseBurger'));

        const burger = burgerBuilder.addBun().addSalad().addCheese().addSteak().addCheese().addOignon().addSteak().addBun().build();

        burger.getIngredients()
    }
}
