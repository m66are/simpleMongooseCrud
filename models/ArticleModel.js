import mongoose from "mongoose";
const articleSchema = mongoose.Schema(
    
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
       
      
    },
    {
        timestamps: true
    }
);
export default mongoose.model('article',articleSchema,'articles')