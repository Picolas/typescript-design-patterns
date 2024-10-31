import {Strategy} from "./Strategy";

export class ReverseStrategy implements Strategy {
    execute(data: any[]): void {
        data.reverse();
    }
}