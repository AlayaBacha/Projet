const { body, validationResult } = require('express-validator');


exports.SignUpValidator = [
    body('email','You must enter an email').isEmail(),
    body('password', 'Your Password Must Contain 8 Char').isLength({min : 8})
]

exports.validation=(req,res,next)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).send({ errors: result.array() });
     
    }
  next()
   
}