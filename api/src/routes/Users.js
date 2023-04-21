const {Router} = require('express');
const router = Router();
const User = require('../models/users');


router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        return res.json(users)
    } catch (err) {
        return res.status(400).json(err)
    }
})

router.post("/create", async (req,res,next) =>{
    try {
        const {name,email,role} = req.body

        let found = await User.find({email})
        if (found.length > 0) return res.status(400).send('user already in db')

        let newUser = new User({
            name,email,role
        })

        const saved = await newUser.save()

        console.log(saved)

        return res.send(saved)


    } catch (err) {
        next(err)     
    }
})

module.exports = router;