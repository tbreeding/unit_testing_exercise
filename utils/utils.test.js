const EXPECT = require('expect');
const UTILS = require('./utils');

describe('utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let result = UTILS.add(33, 11);
        
            EXPECT(result).toBe(44)
                .toBeA('number')
        
        });
        
        it('should async add two numbers', (done) => {
            UTILS.asyncAdd(4,3, (sum) => {
                EXPECT(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            let result = UTILS.square(3);
        
            EXPECT(result).toBe(9)
                .toBeA('number');
        });
        
        it('should async square two numbers', (done) => {
            UTILS.asyncSquare(4, (square) => {
                EXPECT(square).toBe(16).toBeA('number');
                done();
            })
        });
    });
});

it('should set first and last name', () => {
    let result = UTILS.setName({}, 'Tim Breeding');
    EXPECT(result).toEqual({firstName: 'Tim', lastName: 'Breeding'})
        .toInclude({firstName: 'Tim', lastName: 'Breeding'})

});

// it('should expect some values', () => {

//     // expect(12).toNotBe(12);
//     // EXPECT({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // EXPECT([2,3,4]).toExclude(5);
//     EXPECT({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toInclude({
//         age: 25
//     })

// });