"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchProject = void 0;
var CreationalTypes;
(function (CreationalTypes) {
    CreationalTypes[CreationalTypes["Factory"] = 0] = "Factory";
    CreationalTypes[CreationalTypes["AbstractFactory"] = 1] = "AbstractFactory";
    CreationalTypes[CreationalTypes["Builder"] = 2] = "Builder";
    CreationalTypes[CreationalTypes["Prototype"] = 3] = "Prototype";
    CreationalTypes[CreationalTypes["Singleton"] = 4] = "Singleton";
})(CreationalTypes || (CreationalTypes = {}));
var StructuralTypes;
(function (StructuralTypes) {
    StructuralTypes[StructuralTypes["Adapter"] = 0] = "Adapter";
    StructuralTypes[StructuralTypes["Bridge"] = 1] = "Bridge";
    StructuralTypes[StructuralTypes["Composite"] = 2] = "Composite";
    StructuralTypes[StructuralTypes["Decorator"] = 3] = "Decorator";
    StructuralTypes[StructuralTypes["Facade"] = 4] = "Facade";
    StructuralTypes[StructuralTypes["Flyweight"] = 5] = "Flyweight";
    StructuralTypes[StructuralTypes["Proxy"] = 6] = "Proxy";
})(StructuralTypes || (StructuralTypes = {}));
var BehavioralTypes;
(function (BehavioralTypes) {
    BehavioralTypes[BehavioralTypes["ChainOfResponsibility"] = 0] = "ChainOfResponsibility";
    BehavioralTypes[BehavioralTypes["Command"] = 1] = "Command";
    BehavioralTypes[BehavioralTypes["Iterator"] = 2] = "Iterator";
    BehavioralTypes[BehavioralTypes["Mediator"] = 3] = "Mediator";
    BehavioralTypes[BehavioralTypes["Memento"] = 4] = "Memento";
    BehavioralTypes[BehavioralTypes["Observer"] = 5] = "Observer";
    BehavioralTypes[BehavioralTypes["State"] = 6] = "State";
    BehavioralTypes[BehavioralTypes["Strategy"] = 7] = "Strategy";
    BehavioralTypes[BehavioralTypes["TemplateMethod"] = 8] = "TemplateMethod";
    BehavioralTypes[BehavioralTypes["Visitor"] = 9] = "Visitor";
})(BehavioralTypes || (BehavioralTypes = {}));
class LaunchProject {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
}
exports.LaunchProject = LaunchProject;
