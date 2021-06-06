process.env.NODE_ENV = "test";
var backendHost = process.env.BACK_HOST || 'localhost';

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
let host = 'http://'+backendHost+':3030/';


chai.use(chaiHttp);
//Our parent block
describe("API", () => {
  /*
   * Test the /GET route
   */
  describe("/GET home", () => {
    it("it should GET any reply", done => {
      chai
        .request(server)
        .get('/movies')
        .end((err, res) => {
          res.should.have.property('status',400);
          done();
        });
    });
  });
});
