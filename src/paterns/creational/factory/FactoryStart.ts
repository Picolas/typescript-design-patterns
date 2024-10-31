import {BurgerStore} from "./BurgerStore";

export class FactoryStart {
    constructor() {
        this.main()
    }

    main() {
        const burgerStore = new BurgerStore();
        const order1 = burgerStore.orderBurger('CheeseBurger')

        console.log(order1?.name)
    }
}
