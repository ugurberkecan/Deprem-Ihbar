const mongoose = require('mongoose');
const app = require('./config/express');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/my-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
