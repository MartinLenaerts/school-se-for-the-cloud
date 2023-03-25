const express = require("express")

const router = express.Router();

let mysql = require('mysql2/promise');
const dotenv = require('dotenv')
dotenv.config()


/* GET users listing. */
router.get('/', async function (req, res, next) {

    let connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    });

    const [result, _] = await connection.query("SELECT * FROM users")

    res.send(result);
});

module.exports = router
