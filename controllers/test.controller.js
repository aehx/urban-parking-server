exports.test = async (req, res, next) => {
  const {email,password} = req.body;
  try {
      res.json({email,password});
  } catch (err) {
    res.json("notnot");
    // next(err);
  }
};
