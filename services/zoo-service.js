const zooDB = require('../db/zoo-db');

async function getAllAnimals() {
    return await zooDB.getAllAnimals();
}

async function createAnimal(animalType, animalName, animalAge) {
    return await zooDB.createAnimal(animalType, animalName, animalAge);
}

module.exports = {getAllAnimals, createAnimal}
