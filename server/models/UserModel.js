const mongoose = require('mongoose');
const { LuArrowUpWideNarrow } = require('react-icons/lu');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        unique: true,
    }
}, {timestamps: true})


// static signup method
UserSchema.statics.signup = async function(email, password){

    // validation
    if(!email || !password){
        throw Error('All field must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exist = await this.findOne({email});

    if(exist){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash})

    return user
}

// static login method
UserSchema.statics.Login = async function(email, password){
    if(!email || !password){
        throw Error('All field must be filled')
    }

    const user = await this.findOne({ email });

    if(!user){
        throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password');
    }

    return user;

}

module.exports = mongoose.model('User', UserSchema);