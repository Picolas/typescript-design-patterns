import {FactoryStart} from "../paterns/creational/factory/FactoryStart";
import {BuilderStart} from "../paterns/creational/builder/BuilderStart";
import {AbstractFactoryStart} from "../paterns/creational/abstract-factory/AbstractFactoryStart";
import {SingletonStart} from "../paterns/creational/singleton/SingletonStart";
import {ObserverStart} from "../paterns/behavioral/observer/ObserverStart";
import {IteratorStart} from "../paterns/behavioral/iterator/IteratorStart";
import {StrategyStart} from "../paterns/behavioral/strategy/StrategyStart";
import {AdapterStart} from "../paterns/structural/adapter/AdapterStart";

export enum CreationalTypes {
    Factory = 'Factory',
    AbstractFactory = 'AbstractFactory',
    Builder = 'Builder',
    Prototype = 'Prototype',
    Singleton = 'Singleton'
}

export enum StructuralTypes {
    Adapter = 'Adapter',
    Bridge = 'Bridge',
    Composite = 'Composite',
    Decorator = 'Decorator',
    Facade = 'Facade',
    Flyweight = 'Flyweight',
    Proxy = 'Proxy'
}

export enum BehavioralTypes {
    ChainOfResponsibility = 'ChainOfResponsibility',
    Command = 'Command',
    Iterator = 'Iterator',
    Mediator = 'Mediator',
    Memento = 'Memento',
    Observer = 'Observer',
    State = 'State',
    Strategy = 'Strategy',
    TemplateMethod = 'TemplateMethod',
    Visitor = 'Visitor'
}

export type launchProjectType = CreationalTypes | StructuralTypes | BehavioralTypes;

export class LaunchProject {
    private readonly _type: launchProjectType;

    constructor(type: launchProjectType) {
        this._type = type;
    }

    get type(): launchProjectType {
        return this._type;
    }

    start() {
        // Nice switch Hell
        switch (this.type) {
            case CreationalTypes.Factory:
                console.info('Projet lancé sur Factory')
                new FactoryStart();
                break;
            case CreationalTypes.AbstractFactory:
                console.info('Projet lancé sur Abstract Factory')
                new AbstractFactoryStart();
                break;
            case CreationalTypes.Builder:
                console.info('Projet lancé sur Builder')
                new BuilderStart();
                break;
            case CreationalTypes.Singleton:
                console.info('Projet lancé sur Singleton')
                new SingletonStart();
                break;
            case BehavioralTypes.Observer:
                console.info('Projet lancé sur Observer')
                new ObserverStart();
                break;
            case BehavioralTypes.Iterator:
                console.info('Projet lancé sur Iterator')
                new IteratorStart();
                break;
            case BehavioralTypes.Strategy:
                console.info('Projet lancé sur Strategy')
                new StrategyStart();
                break;
            case StructuralTypes.Adapter:
                console.info('Projet lancé sur Adapter')
                new AdapterStart();
                break;
            default:
                console.error('Type non supporté');
        }
    }
}