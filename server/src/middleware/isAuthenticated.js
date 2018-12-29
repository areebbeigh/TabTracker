module.exports = function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    next(null, req, res)
  } else {
    res.status(401).send({
      error: 'Access denied.'
    })
  }
}
