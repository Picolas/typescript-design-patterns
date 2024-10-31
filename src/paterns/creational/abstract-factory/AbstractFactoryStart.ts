import {BurgerStore} from "./BurgerStore";
import {CheeseBurgerFactory} from "./CheeseBurgerFactory";
import {DeluxeBurgerFactory} from "./DeluxeBurgerFactory";

export class AbstractFactoryStart {
    constructor() {
        this.main()
    }

    main() {
        const cheeseBurgerFactory = new CheeseBurgerFactory();
        const cheeseBurgerStore = new BurgerStore(cheeseBurgerFactory);
        const order1 = cheeseBurgerStore.orderBurger()

        const deluxeBurgerFactory = new DeluxeBurgerFactory();
        const deluxeBurgerStore = new BurgerStore(deluxeBurgerFactory);
        const order2 = deluxeBurgerStore.orderBurger()

        console.log(order1?.name, order2?.name)
    }
}
