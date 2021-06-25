const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('mongo.host'), {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to MongoDB...")
    })
    .catch((err) => console.error('Could not connect to MongoDB', err)
    );

const ZooModel = mongoose.model('Zoo',
    new mongoose.Schema({
        animalType: String,
        animalName: String,
        animalAge: Number,
        imageUrl: String
    })
);

module.exports = ZooModel;
