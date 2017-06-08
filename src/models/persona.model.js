import mongoose from 'mongoose';

const personaSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String
});

const Person = mongoose.model("person", personaSchema);

export default Person;