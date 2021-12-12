const bcrypt = require('bcryptjs')
const  { userModel  } = require('../model/users')


module.exports.signup = async(req, res)=>{

    const newPassword = await bcrypt.hash(req.body.password, 10)
    req.body.password = newPassword

    const userObj = new userModel(req.body)
    userObj.save()
    .then(()=>{
        res.render('home', {message: "WELCOME", email:req.body.email})
    })
    .catch(()=>{
        res.send({error:"unable to add user to db"})
    })

}