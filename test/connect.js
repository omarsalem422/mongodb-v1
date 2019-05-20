const mongoose = require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/testaroo', {useNewUrlParser: true});

mongoose.connection
    .once('open', () => {
        console.log('Connection has been made - now make fireworks ...');
    })
    .once('error', (error) => {
        console.log('Connection error: ', error);
    });