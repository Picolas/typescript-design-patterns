import {ArrayIterator} from "./ArrayIterator";
import {MapIterator} from "./MapIterator";

export class IteratorStart {

    constructor() {
        this.main();
    }

    main() {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const map = new Map<number, string>();
        map.set(1, 'test')
        map.set(2, '2test')
        map.set(3, '3test')
        map.set(4, '4test')

        const arrayIterator = new ArrayIterator<number>(array);
        while (arrayIterator.hasMore()) {
            console.log(arrayIterator.getNext());
        }

        const mapIterator = new MapIterator<number, string>(map);
        while (mapIterator.hasMore()) {
            console.log(mapIterator.getNext());
        }
    }

}