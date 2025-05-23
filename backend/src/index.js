import app from './app.js'
import connectDb from './db/index.js';
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})

console.log(process.env.DB_NAME)

connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on ${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("Error occured",err);
})