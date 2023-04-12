exports.test = async (req, res, next) => {
  const body = req.body;
  try {
    if(body){
      res.json(body);
    } else{
      res.json("body");
    }
  } catch (err) {
    res.json("notnot");
    // next(err);
  }
};
