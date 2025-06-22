import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema({
    scheme: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String
    },
    link: {
        type: String
    }
})

const Scheme = mongoose.model('Scheme', schemeSchema)

export default Scheme;