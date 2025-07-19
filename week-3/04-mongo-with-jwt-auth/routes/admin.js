const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"user created successfully!"
    })


});

router.post('/signin',  async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.findOne({
        username,
        password
    })
    if (user){
        const token = jwt.sign({
            username,
            password

        },JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg:"incorrect username or pass"

        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;