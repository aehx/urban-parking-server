exports.hello = async (_req, res, next) => {
  try {
    const json = {
      hello: "Kevin",
    };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(json);
    next();
  } catch (e) {
    next(e);
  }
};