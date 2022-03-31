const { assert } = require('console');
const request = require('supertest');
const url = process.env.URL_Testing || "http://localhost:4001";
//const app = require('../app');

//Testing default route
/*describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Welcome to API - HomePage 🙌👋🌎⭐️👏☀️🚀✨'
      }, done);
  });
});*/

describe('Loading the homepage', function() {
        it('should return 200 from GET /', function(done) {
            request(url)
                .get('/')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
});
    
describe('Loading the homepage 1', function() {
        it('should return 200 from GET /', function(done) {
            request(url)
                .get('/')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
});

describe('the homepage', function() {
        it('returns the correct content', async () => {
            const response = await request(url)
                .get('/')
                .send();
            console.log(response.text);
        });
});

describe('the homepage 1', function() {
        it('returns the correct content', async () => {
            request(url)
                .get('/ss')
                .expect('Content-Type', /html/)
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        //return done(err);
                    }
                    expect(res.body).toStrictEqual('Alain');
                });
            
        });
});

describe('GET /', () => {
  it('responds with a html message', async () => {
    const response = await request(url)
      request(url)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
          .expect((response) => {
              assert.once(response.body.should('Alain'))
          })
  });
});