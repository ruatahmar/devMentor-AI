import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    githubId:{
        type:String,
        required:true
    },
    username:{
        type:String
    },

})
const User = mongoose.model('User',userSchema)
export default User