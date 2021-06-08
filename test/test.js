process.env.NODE_ENV = "test";
var backendHost = process.env.BACK_HOST || 'localhost';

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let expect = require("chai").expect;
let should = chai.should();
let host = 'http://'+backendHost+':3030';


chai.use(chaiHttp);
//Our parent block
describe("UI", () => {
  /*
   * Test the /GET route
   */
  describe("GET home page", () => {
    it("it should reply 200 over /", done => {
		chai.request(host) 
			.get('/')
			.end(function(err, res){
            expect(res.status).to.equal(200);
          done();
        });
      });
  });
  describe("GET movies page", () => {
    it("it should reply 200 over /movies", done => {
		chai.request(host) 
			.get('/movies')
			.end(function(err, res){
            expect(res.status).to.equal(200);
          done();
        });
      });
  });
  describe("GET reviewers page", () => {
    it("it should reply 200 over /reviewers", done => {
		chai.request(host) 
			.get('/reviewers')
			.end(function(err, res){
            expect(res.status).to.equal(200);
          done();
        });
      });
  });
  describe("GET publications page", () => {
    it("it should reply 200 over /publications", done => {
		chai.request(host) 
			.get('/publications')
			.end(function(err, res){
            expect(res.status).to.equal(200);
          done();
        });
      });
  });
});