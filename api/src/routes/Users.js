const {Router} = require('express');
const router = Router();
const User = require('../models/users');
const bcrypt = require("bcrypt")

// Esto va a cambiar a encontrar un usuario
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        return res.json(users)
    } catch (err) {
        return res.status(400).json(err)
    }
})

router.post("/create-user", async (req,res,next) =>{
    try {
        const {name,email,role,password} = req.body

        const hashedWord = await bcrypt.hash(password,10,)

        console.log("HASHED WORD",hashedWord)

        let found = await User.find({email})
        if (found.length > 0) return res.status(400).send('user already in db')

        let newUser = new User({
            name,
            email,
            role,
            password: hashedWord
        })

        const saved = await newUser.save()

        console.log(saved)

        return res.send(saved)
    } catch (err) {
        next(err)     
    }
})

module.exports = router;