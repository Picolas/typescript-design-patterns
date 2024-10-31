import {BurgerService} from "./BurgerService";

export class SingletonStart {
    constructor() {
        this.main()
    }

    main() {
        const burgerService = BurgerService.getInstance();
        burgerService.name = "test"

        console.log(burgerService.name)

        const burgerService2 = BurgerService.getInstance();

        console.log(burgerService2.name)
    }
}