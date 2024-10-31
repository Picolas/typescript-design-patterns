import {Iterator} from "./Iterator";

export interface IterableCollection<T> {

    createIterator(): Iterator<T>;

}