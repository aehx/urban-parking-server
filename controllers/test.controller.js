exports.test = async (req, res, next) => {
  try {
    const body = req.body;
    
    res.json(body);
  } catch (err) {
    next(err);
  }
};
