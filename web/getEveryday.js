const getEverydayDao = require("../dao/getEverydayDao");

const path = new Map();

function getEverydayMsg(req,res) {
    getEverydayDao(result =>{
        res.writeHead(200,{"content-type":"text/json;charset=utf-8"})
        res.write(JSON.stringify(result));
        res.end();
    })
}
path.set("/getEverydayMsg",getEverydayMsg);
module.exports.path = path;