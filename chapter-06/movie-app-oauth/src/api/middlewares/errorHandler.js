const errorHandling = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    req.sentry.captureException(err);
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { errorHandling };
