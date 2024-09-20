import userModel from "../models/userModel.js"

export const register = async (req, res) => {
    // const {email, username, password} = req.body  
   
    // try{
    //     const newUser = new User({
    //         username,
    //         email,
    //         password
    //     })
    //     await newUser.save()
    //     res.send('registrando')
    // }catch(err){
    //     res.status(400).send(err)
    // }
    console.log(req.body)
}

export const login = (req, res) => res.send('login')