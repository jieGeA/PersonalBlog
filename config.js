const fs = require("fs");

const globalConfig = {};

const conf = fs.readFileSync("./server.conf");

const confArr = conf.toString().split("\n")

for (let i = 0,len = confArr.length; i < len; i++){
    const tem = confArr[i].split("=");
    globalConfig[tem[0].trim()] = tem[1].trim();
}

module.exports = globalConfig