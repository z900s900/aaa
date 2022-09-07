const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Shelter name is required!'],
        minlength: [3, 'Shelter name must be at least 3 characters long'],
        unique: [true, 'Pet name must be unique!']
    },
})

const Shelter = mongoose.model('Shelter', ShelterSchema);

module.exports = Shelter;