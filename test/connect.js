const mongoose = require('mongoose');

before((done) => {   //Mocha hook
    //Connect to mongodb
    mongoose.connect('mongodb://localhost:27017/testaroo', { useNewUrlParser: true });

    mongoose.connection
        .once('open', () => {
            console.log('Connection has been made - now make fireworks ...');
            done();
        })
        .once('error', (error) => {
            console.log('Connection error: ', error);
        });
});


// Drop the character collection before each test
beforeEach( (done) => {     //Mocha hook
    mongoose.connection.collections.mariochars.drop( () => {
        done();
    })
    
});

