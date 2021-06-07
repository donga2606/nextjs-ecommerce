
import {User} from '../model/index'

import bcrypt from 'bcrypt'
import { Request, Response } from 'express';

export default   async (req: Request, res: Response) => {
    try{
        
        const { name, email, password } = req.body

        const user = await User.findOne({ email })
        if(user) return res.status(400).json({err: 'This email already exists.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = await User.create({ 
            username: name, email, password: passwordHash
        })
        
        res.json({msg: "Register Success!"})

    }catch(err){
        console.log(err)
        return res.status(500).json({err: err.message})
    }
}