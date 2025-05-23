import connectDb from './config/db.js';
import dotenv from "dotenv";
import './config/passport.js'

dotenv.config({
    path:'./.env'
})

import app from './app.js'

console.log(process.env.SESSION_SECRET)

connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Error occured",err);
})