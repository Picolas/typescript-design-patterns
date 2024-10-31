export class RoundPeg {
    protected _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }
}