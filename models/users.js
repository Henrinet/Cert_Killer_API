import { Schema, model } from 'mongoose';

const usersSchema = Schema({
    name : String,
    email : String,
    password : String
});

module.exports = model('Users', usersSchema);