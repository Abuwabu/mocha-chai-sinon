var promise = require('../promise.js');
var expect = require('chai').expect;



describe('Promise Me', function () {
  var returnedMsg;
  
  beforeEach(function (done) {
    promise(love).then(function (msg) {
      returnedMsg = msg;
      done();
    }, function(eMsg) {
      returnedMsg = eMsg;
      done();
    });
  });
  
  var love = 'Biscuits';
  
  it('should love biscuits', function() {
    expect(returnedMsg)
      .to.be.a('string')
      .and.to.equal("Yeah! Biscuits... Now that's what I call love");

    love = 123 + 456;
  });
  

  it('should hate maths', function(done) {
    expect(returnedMsg)
      .to.be.a('string')
      .and.to.equal("Nope! Not feeling the love");
    done();
  });
});
