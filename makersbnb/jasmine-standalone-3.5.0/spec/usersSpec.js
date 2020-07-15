describe('Users', function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  describe('can create a user', function() {
    it('has a name', function() {
      expect(user.name).toEqual("name");
    });
    it('has an email address', function() {
      expect(user.email).toEqual("email");
    });
    it('has a password', function() {
      expect(user.password).toEqual("password");
    });


    })


  })

}
