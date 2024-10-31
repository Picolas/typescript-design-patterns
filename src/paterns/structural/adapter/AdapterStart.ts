import {RoundHole} from "./RoundHole";
import {SquarePeg} from "./SquarePeg";
import {RoundPeg} from "./RoundPeg";
import {SquarePegAdapter} from "./SquarePegAdapter";

export class AdapterStart {
    constructor() {
        this.main();
    }

    main() {
        const hole = new RoundHole(5);
        const peg = new RoundPeg(5);
        console.log(hole.fits(peg));

        const smallPeg = new SquarePeg(5);
        const largePeg = new SquarePeg(10);
        const smallPegAdapter = new SquarePegAdapter(smallPeg);
        const largePegAdapter = new SquarePegAdapter(largePeg);

        console.log(hole.fits(smallPegAdapter));
        console.log(hole.fits(largePegAdapter));
    }
}