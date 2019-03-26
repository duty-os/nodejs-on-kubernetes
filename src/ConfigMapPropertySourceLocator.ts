import {PropertySourceLocator} from "./PropertySourceLocator";
import * as fs from "fs";
import * as YAML from 'yaml'

export class ConfigMapPropertySourceLocator implements PropertySourceLocator {
    public locate(configMapPath: string, fallbackPath: string): any {
        let yamlContent: string;
        try {
            yamlContent = fs.readFileSync(configMapPath, 'utf8');
        } catch (e) {
            console.warn(`config map ${configMapPath} can't read.`);
            try {
                yamlContent = fs.readFileSync(fallbackPath, 'utf8');
            } catch (e) {
                throw new Error(`fallback path ${fallbackPath} can't read.`);
            }
        }
        return YAML.parse(yamlContent);
    }
}