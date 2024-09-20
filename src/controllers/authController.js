import User from "../models/userModel.js"

export const register = async (req, res) => {

    const {email, username, password} = req.body  
   
    try{
        const newUser = new User({
            username,
            email,
            password
        })

        const userSaved = await newUser.save()
        res.json(userSaved)
    }catch(err){
        res.status(400).send(err)
    }
}

export const login = (req, res) => res.send('login')