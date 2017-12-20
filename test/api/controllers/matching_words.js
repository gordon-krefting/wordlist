var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('matching_words', function() {

    describe('GET /matching_words', function() {

      it('"qqqqq" should return empty array', function(done) {

        request(server)
          .get('/matching_words')
          .query({ q: 'qqqqq'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([]);
            done();
          });
      });

      it('empty "q" param should return empty array', function(done) {

        request(server)
          .get('/matching_words')
          .query({ q: ''})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([]);
            done();
          });
      });

      it('invalid param should return empty array', function(done) {
        request(server)
          .get('/matching_words')
          .query({ q: ' '})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([]);
            done();
          });
      });

      it('"tr.." should return some matches', function(done) {
        request(server)
          .get('/matching_words')
          .query({ q: 'tr..'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            (res.body.length > 2 ).should.be.true;
            res.body.should.containEql('tree');
            done();
          });
      });

    });

  });

});
