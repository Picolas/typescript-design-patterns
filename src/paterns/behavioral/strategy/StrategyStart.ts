import {SortStrategy} from "./SortStrategy";
import {Context} from "./Context";
import {ReverseStrategy} from "./ReverseStrategy";

export class StrategyStart {
    constructor() {
        this.main();
    }

    main() {
        const sortStrategy = new SortStrategy();
        const sortContext = new Context(sortStrategy)
        sortContext.executeStrategy([1, 2, 7, 5, 0, 4])

        const reverseStrategy = new ReverseStrategy();
        const reverseContext = new Context(reverseStrategy)
        reverseContext.executeStrategy([1, 2, 7, 5, 0, 4])
    }
}