const fs = require("fs");
const globalConfig = require("./config");

const pathMap = new Map();

const files = fs.readdirSync(globalConfig["web_path"]);

for (let i = 0,len =files.length;i < len; i++) {
    const tem = require(`./${globalConfig["web_path"]}/${files[i]}`);
    if (tem.path) {
        for (let [key,value] of tem.path) {
            if (pathMap.get(key) == null){
                pathMap.set(key,value);
            } else {
                throw new Error("url path 异常 url:" + key);
            }
        }
    }
}

module.exports = pathMap;
