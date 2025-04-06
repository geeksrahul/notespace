import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const connectDB = async ()=>{
    try {
        let con = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('mongodb connected successfully ')
    } catch (error) {
        console.log(`mongodb connection error:  ${error}`)
    }
}

export default connectDB;