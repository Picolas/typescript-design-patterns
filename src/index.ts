import {LaunchProject, launchProjectType, StructuralTypes} from "./core/launch-project";

// Change this according to the DesignPattern you want to try.
const startType: launchProjectType = StructuralTypes.Adapter;

new LaunchProject(startType).start();