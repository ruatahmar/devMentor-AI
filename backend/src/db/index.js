import mongoose from 'mongoose';


const connectDb = async()=>{
    try{
        console.log(`${process.env.URL}/${process.env.DB_NAME}`);
        await mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`);

    }
    catch(err){
        console.log("database connection failed:", err);
        process.exit(1);
    }
};


export default connectDb;