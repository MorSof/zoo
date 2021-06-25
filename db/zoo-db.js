const ZooModel = require("./clients/mongo");

async function getAllAnimals() {
    const zoo = await ZooModel.find({});
    return zoo;
}

async function createAnimal(animalType, animalName, animalAge, imageUrl) {
    let animal = {animalType, animalName, animalAge, imageUrl};
   return await new ZooModel(animal).save();
}

module.exports = {getAllAnimals, createAnimal};
