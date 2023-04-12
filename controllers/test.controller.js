exports.test = async (req, res, next) => {
  const body = req.body;
  try {
      res.json(body);
  } catch (err) {
    res.json("notnot");
    // next(err);
  }
};
