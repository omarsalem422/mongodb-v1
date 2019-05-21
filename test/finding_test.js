const MarioChar = require('../models/mariochar');
const assert = require('assert');

// Describe tests
describe('Finding records', () => {
    let char;

    beforeEach( (done) => {
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
    it('Finds one a record by name in the database', (done) => {

        MarioChar.findOne({name: 'Mario'})
        .then( (result) => {
            assert(result.name === 'Mario');
            done();
        });
    });

    it('Finds one record by id in the database', (done) => {

        MarioChar.findOne({_id: char._id})
        .then( (result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    })

});