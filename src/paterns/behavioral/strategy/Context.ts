import {Strategy} from "./Strategy";

export class Context {

    private _strategy: Strategy;

    constructor(strategy: Strategy) {
        this._strategy = strategy;
    }

    executeStrategy(data: any[]) {
        console.log("On execute la strategie adéquoite")
        this._strategy.execute(data);
        console.log(data);
    }

    get strategy(): Strategy {
        return this._strategy;
    }

    set strategy(value: Strategy) {
        this._strategy = value;
    }
}