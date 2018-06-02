const REQUEST = require('supertest');
const APP = require('./server').APP;
const EXPECT = require('expect');


describe('server', () => {
    
   describe('get /', () => {
    it('should return howdy response', (done) => {
        REQUEST(APP)
            .get('/')
            .expect(404)
            .expect((res) => {
                EXPECT(res.body).toInclude({
                    error: 'Page not found.'
                })
            })
            .end(done);
    
    });
   });   

   describe('get /users', () => {
    it('should return my user object', (done) => {
        REQUEST(APP)
            .get('/users')
            .expect(200)
            .expect((res) => {
                EXPECT(res.body).toInclude({
                    name: 'Tim',
                    age: 36
                })
            })
            .end(done);
    
    });
   });
});


