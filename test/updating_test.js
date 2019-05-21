const MarioChar = require('../models/mariochar');
const assert = require('assert');

// Describe tests
describe('Updating records', () => {
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
    it('Update one record in  the database', (done) => {

        MarioChar.findOneAndUpdate({ name: 'Mario' }, {name: "Luigi"})
            .then(() => {
                MarioChar.findOne({ name: 'Luigi' })
                    .then((result) => {
                        assert(result.name  === "Luigi");
                        done();
                    });
            });
    });

});