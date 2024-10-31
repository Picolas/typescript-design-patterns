export class SquarePeg {
    private readonly _width: number;

    constructor(width: number) {
        this._width = width;
    }

    get width(): number {
        return this._width;
    }
}