import {Observer} from "./model/Observer";
import {Publisher} from "./Publisher";

export class People implements Observer {
    private readonly _name: string;

    constructor(name: string) {
        this._name = name
    }

    update(publisher: Publisher): void {
        console.log(`${this._name} à reçu cette new : ${publisher.news}`)
    }
}