var config = require("../lib/index");

let locator = new config.ConfigMapPropertySourceLocator();
let yaml = locator.locate("/notExist", "./test.yaml");
console.log(yaml["db-url"]);