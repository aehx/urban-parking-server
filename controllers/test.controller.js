exports.test = async (req, res, next) => {
  try {
    const body = req.body;
    res.json("Body", body);
  } catch (error) {
    res.json(error);
  }
};
