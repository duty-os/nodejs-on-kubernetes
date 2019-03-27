"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var YAML = require("yaml");
var ConfigMapPropertySourceLocator = /** @class */ (function () {
    function ConfigMapPropertySourceLocator() {
    }
    ConfigMapPropertySourceLocator.prototype.locate = function (configMapPath, fallbackPath) {
        var yamlContent;
        try {
            yamlContent = fs.readFileSync(configMapPath, 'utf8');
        }
        catch (e) {
            console.warn("config map " + configMapPath + " can't read.");
            try {
                yamlContent = fs.readFileSync(fallbackPath, 'utf8');
            }
            catch (e) {
                throw new Error("fallback path " + fallbackPath + " can't read.");
            }
        }
        var configMapJSObject = YAML.parse(yamlContent);
        console.log("Config map is " + JSON.stringify(configMapJSObject));
        return configMapJSObject;
    };
    return ConfigMapPropertySourceLocator;
}());
exports.ConfigMapPropertySourceLocator = ConfigMapPropertySourceLocator;
//# sourceMappingURL=ConfigMapPropertySourceLocator.js.map