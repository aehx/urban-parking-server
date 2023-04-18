const jwt = require('jsonwebtoken');
const { findUserPerId } = require('../queries/user.queries');
const secret = process.env.JWT_SECRET;

exports.createJwtToken = (user)=>{
  const token = jwt.sign({sub :user._id,exp:(Date.now()/1000) + (6 * 60)},secret)
  return token;
}

exports.verifyToken = async (req,res,next)=>{
  if(req.headers && req.headers.authorization){
  const token = req.headers.authorization.split(" ")[1];
  try {
        const decoded = jwt.verify(token,secret);
        const user = await findUserPerId(decoded.sub);
        if(!user){
          res.status(401).json({error:"unauthorized access"})
        }else{
          req.user = user
          next()
      }
  } catch (e) {
    switch(e.name){
      case "JsonWebTokenError":
        return res.status(401).json({result : false,error:"unauthorized access"});
        case "TokenExpiredError":
          return res.status(401).json({result : false,error:"Expired Error"});
    }
    res.json({error:"Server error"})
  }
   } else {
    res.status(401).json({error:"unauthorized access"})
  }
}