const jwt=require('jsonwebtoken'),S=process.env.JWT_SECRET||'leapflow-secret';
module.exports=(req,res,next)=>{const h=req.headers.authorization;if(!h?.startsWith('Bearer '))return res.status(401).json({error:'No token'});try{req.user=jwt.verify(h.split(' ')[1],S);next();}catch{res.status(401).json({error:'Invalid token'});}};
