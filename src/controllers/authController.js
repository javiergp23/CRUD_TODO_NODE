import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import  { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {

    const {email, username, password} = req.body  
    try{
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })

        const userSaved = await newUser.save()

        const token = await createAccessToken({id: userSaved._id})

        res.cookie('token', token)
        res.json({
            id:userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    }catch(err){
        res.status(400).send(err)
    }
};

export const login = async (req, res) => {

    const {email, password} = req.body  
    try{

        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400).json({MESSAGE: "User not found"})

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) 
            return res.status(400).json({MESSAGE: "Password not match"})

        const token = await createAccessToken({id: userFound._id})
        
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            username:  userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    }catch(err){
        res.status(400).send(err)
    }
};

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
    })
    return res.sendStatus(200)
};

export const profile = (req, res) => {
    res.send('profile')
}