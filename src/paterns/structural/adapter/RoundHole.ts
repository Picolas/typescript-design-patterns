import {RoundPeg} from "./RoundPeg";

export class RoundHole {
    private readonly _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.radius >= peg.radius
    }
}