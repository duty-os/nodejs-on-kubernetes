import { PropertySourceLocator } from "./PropertySourceLocator";
export declare class ConfigMapPropertySourceLocator implements PropertySourceLocator {
    locate(configMapPath: string, fallbackPath: string): any;
}
