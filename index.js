const globalConfig = require("./config")
const express = require("express");
const loader = require("./loader")

const app = new express();

app.use(express.static(globalConfig["page_path"]));

app.get("/getEverydayMsg",loader.get("/getEverydayMsg"))

app.listen(globalConfig.port,() => {console.log("server runing....")})