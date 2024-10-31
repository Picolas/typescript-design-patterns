import {Publisher} from "./Publisher";
import {People} from "./People";

export class ObserverStart {
    constructor() {
        this.main();
    }

    main() {
        const publisher = new Publisher();

        const people1 = new People('Joris');
        const people2 = new People('Anna');
        const people3 = new People('Bertrand');

        publisher.attach(people1)
        publisher.attach(people2)
        publisher.attach(people3)

        publisher.addNews('Test de news')

        const people4 = new People('Lea');
        const people5 = new People('Alice');

        publisher.attach(people4)
        publisher.detach(people1)
        publisher.attach(people5)

        publisher.addNews('Bonne nouvelle c\'est les vacances!')
    }
}