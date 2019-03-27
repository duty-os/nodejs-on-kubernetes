export interface PropertySourceLocator {
    locate(configMapPath: string, fallbackPath: string): any;
}
