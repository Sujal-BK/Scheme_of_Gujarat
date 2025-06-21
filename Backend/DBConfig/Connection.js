import mongoose from "mongoose";


const DBConnection = async() =>{
    try {
          const connection = await mongoose.connect(process.env.MONGODB_URI)          
          console.log(`Database connected successfully`);
          
    } catch (error) {
        console.log('Database connection error ',(error));
    }
}

export default DBConnection