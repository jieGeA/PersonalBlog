const express = require("express");
const app = new express();

app.use(express.static("./pages"));

app.listen(12306,() => {console.log("server runing....")})