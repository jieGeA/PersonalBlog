const createConnection = require("./dbUtil");

function getEveryDay(suc) {
    const connection = createConnection.createConnection();
    const date = new Date();
    const curDate = date.getDate();
    const num = curDate % 10;
    const querySql = `select * from every_day where id = ${num}`;
    connection.connect();
    connection.query(querySql,(err,res) => {
        if (err === null) {
            suc(res)
        } else {
            throw new Error(err)
        }
    })
    connection.end();
}

module.exports = getEveryDay;