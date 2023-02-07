const mongoose = require('mongoose');
const app = require('./config/express');
require("dotenv").config();

const url = process.env.MONGO_URL;


mongoose.set('strictQuery', false);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
