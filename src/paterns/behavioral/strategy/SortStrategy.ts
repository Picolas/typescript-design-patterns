import {Strategy} from "./Strategy";

export class SortStrategy implements Strategy {
    execute(data: any[]): void {
        data.sort();
    }
}