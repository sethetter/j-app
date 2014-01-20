/**
 * Gets the current user from session, or returns 403
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to controller
  if (req.session.user) {
    req.body.userId = req.session.user;
    return next();
  }

  // User is not allowed
  else {
    return res.send("You are not permitted to perform this action.", 403);
  }
};
