const MarioChar = require('../models/mariochar');
const assert = require('assert');

// Describe tests
describe('Deleting records', () => {
    let char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 80
        });

        char.save()  // save is asynchronous operation
            .then(() => {
                assert(char.isNew === false);
                done();
            });

    });
    // Create test
    it('Delete one record from the database', (done) => {

        MarioChar.findOneAndRemove({ name: 'Mario' })
            .then(() => {
                MarioChar.findOne({ name: 'Mario' })
                    .then((result) => {
                        assert(result === null);
                        done();
                    });
            });
    });

});