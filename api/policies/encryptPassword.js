/**
 * Encrypt password during user creation.
 */
module.exports = function (req, res, ok) {
  var bcrypt = require('bcrypt');
  var rawPassword = req.body.password;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return res.send({ error: "Error generating password salt" }, 500);

    bcrypt.hash(rawPassword, salt, function(err, hash) {
      if (err) return res.send({ error: "Error encrypting password" }, 500);

      req.body.password = hash;
      ok();
    });
  });
};
