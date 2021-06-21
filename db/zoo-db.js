const ZooModel = require("./clients/mongo");

async function getAllAnimals() {
    const zoo = await ZooModel.find({});
    return zoo;
}

async function createAnimal(animalType, animalName, animalAge) {
    let animal = {animalType, animalName, animalAge};
   return await new ZooModel(animal).save();
}

module.exports = {getAllAnimals, createAnimal};
