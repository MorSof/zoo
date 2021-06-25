const ZooMockup = require('../const/zoo.json')
const fs = require('fs');
const ZooModel = require("../db/clients/mongo");
const ZooService = require('../services/zoo-service');

deleteAllTables = async () => {
    try{
        await ZooModel.deleteMany();
        return "Tables deleted successfully";
    }catch(err){
        console.error(err);
        return err;
    }
}

async function initZoo(){
    const zoo = ZooMockup;
    for(let i = 0; i< zoo.length; i++){
        await ZooService.createAnimal(zoo[i].animalType, zoo[i].animalName, zoo[i].animalAge, zoo[i].imageUrl);
    }
    return "Zoo created successfully";
}




module.exports = {deleteAllTables, initZoo}
