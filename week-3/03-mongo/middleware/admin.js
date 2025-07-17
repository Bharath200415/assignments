// Middleware for handling auth
const {Admin} = require("../db");


function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username:username,
        password: password
    })
    .then(function(value){
        if (value){
            next()
        }else{
            res.status(403).json({
                msg:"This Admin doesn't exist"
            })
        }
    })

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
// const jwt = require("jsonwebtoken");

// const value = {
//     name:"bharath",
//     accountNumber:"1211221"
// }

// const token = jwt.sign(value,"secret");
// console.log(token);
// try{
//     const tokenverify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmhhcmF0aCIsImFjY291bnROdW1iZXIiOiIxMjExMjIxIiwiaWF0IjoxNzUyMDgxNjcyfQ.YQSb8_IQyo7aF78CHHzXdKeotXcULrz-0UiX3cJGn0Q","secret")
//     if (tokenverify){
//         console.log("Token verified dawg");
//     }
// }catch{
//     console.log("invalid token bitch");
// }

