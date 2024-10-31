import {Iterator} from "./model/Iterator";

export class MapIterator<K, V> implements Iterator<V> {
    private readonly _map: Map<K, V>;
    private _keys: K[];
    private _index = 0;

    constructor(map: Map<K, V>) {
        this._map = map;
        this._keys = Array.from(map.keys());
    }

    getNext(): V | undefined {
        const key = this._keys[this._index++];
        return this._map.get(key);
    }

    hasMore(): boolean {
        return this._index < this._keys.length
    }

    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }
}