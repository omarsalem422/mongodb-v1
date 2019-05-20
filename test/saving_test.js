const MarioChar = require('../models/mariochar');
const assert = require('assert');

// ES6 Promises
//mongoose.Promise = global.Promise;
//mongoose.Promise = require('bluebird');

// Describe tests
describe('Saving records', () => {

    // Create test
    it('Saves a record to the database', (done) => {
        let char = new MarioChar({
            name: 'Mario',
            weight: 80
        });

        char.save()  // save is asynchronous operation
            .then(() => {
                assert(char.isNew === false);
                done();
            });

    })

});