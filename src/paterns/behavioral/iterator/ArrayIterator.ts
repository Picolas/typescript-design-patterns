import {Iterator} from "./model/Iterator";

export class ArrayIterator<T> implements Iterator<T> {
    private readonly _array: T[];
    private _index = 0;


    constructor(array: T[]) {
        this._array = array;
    }

    getNext(): T | undefined {
        return this._array[this._index++];
    }

    hasMore(): boolean {
        return this._index < this._array.length
    }


    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }
}