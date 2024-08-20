import mongoose from "mongoose";

const connectDb=()=>{
    try{
    mongoose.connect(`${process.env.MONGO_URL}`).then(()=>console.log("Database Connected Successfully"));
    }
    catch(error)
    {
        console.error(error)
    }
}

export default connectDb;