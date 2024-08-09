const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app.js');

mongoose.connect(process.env.DB_CONN_STR).then((conn) => {
    //console.log(conn);
    console.log('db connection successful');
}).catch((err) => {
    console.log(err);
});

app.listen(4000, () => {
    console.log('server started');
})