import mongoose from 'mongoose';
const {Schema, model} = mongoose;
const userSchema = new Schema({
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    login: {type:String, required: true},
    email: {type:String, unique: true, required: true},
    password: {type:String, required: true},
});
const User = mongoose.model('User', userSchema);
export default User;