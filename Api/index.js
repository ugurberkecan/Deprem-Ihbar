const mongoose = require('mongoose');
const app = require('./config/express');
const path = require('path');


require('dotenv').config({ path: path.join(__dirname, '/.env') });


mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
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
