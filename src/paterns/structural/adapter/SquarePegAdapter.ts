import {SquarePeg} from "./SquarePeg";
import {RoundPeg} from "./RoundPeg";

export class SquarePegAdapter extends RoundPeg {
    private _peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(peg.width);
        this._peg = peg;
    }

    get radius() {
        return this._peg.width * Math.sqrt(2) / 2;
    }
}