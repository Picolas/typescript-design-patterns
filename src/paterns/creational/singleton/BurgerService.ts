export class BurgerService {
    private _name = '';
    private static _instance: BurgerService;

    private constructor() {
    }

    static getInstance() {
        if (!BurgerService._instance) {
            BurgerService._instance = new BurgerService();
        }
        return BurgerService._instance
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}