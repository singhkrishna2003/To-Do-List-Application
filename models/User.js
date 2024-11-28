const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');


//User Schema with firstName, lastName, username, and password fields
const userSchema = new Schema({
    firstName:String,
    lastName:String,
    username:{type:String,required:true},
    password:{type:String,required:true}
});


//Passwords Protection by using bcrypt or Registering Passwords and Hashed Password 
userSchema.pre("save",async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(user.password,salt);
    user.password = hash;
    next();
});

//Matches password stored in database
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password,this.password);
}


const User = mongoose.model("User",userSchema);


module.exports = User;

