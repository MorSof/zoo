const zooDB = require('../db/zoo-db');

async function getAllAnimals() {
    return await zooDB.getAllAnimals();
}

async function createAnimal(animalType, animalName, animalAge, imageUrl) {
    return await zooDB.createAnimal(animalType, animalName, animalAge, imageUrl);
}

module.exports = {getAllAnimals, createAnimal}
