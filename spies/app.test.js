const EXPECT = require('expect');
const REWIRE = require('rewire');

let app = REWIRE('./app');

describe('App', () => {
    let db = {
        saveUser: EXPECT.createSpy()
    };
    app.__set__('db', db);
    it('should call the spie correctly', () => {
        let spy = EXPECT.createSpy();
        spy('Andrew', 25);
        EXPECT(spy).toHaveBeenCalled('Andrew', 25); 
    });

    it('should call saveUser with user object', () => {
        let email = 'someemal@example.com';
        let password = '123abc';

        app.handleSignup(email, password);
        EXPECT(db.saveUser).toHaveBeenCalledWith( {email, password});
    });
});