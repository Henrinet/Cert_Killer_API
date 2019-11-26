import { Schema, model } from 'mongoose';

let testSchema = Schema({
    questions : String,
    questionsType : String,
    answers : String
});

export default model('Test', testSchema);
