const express = require('express');
const router = express.Router();
const zooService = require('../services/zoo-service');

router.get('/', async function (req, res) {
  try {
    const zoo = await zooService.getAllAnimals();
    res.json(zoo);
  } catch (err) {
    console.error(err);
    res.status(400).json({status: 400, message: err.message})
  }
})

/* GET home page. */
router.post('/create-animal', async function(req, res, next) {
  try {
    const animal = await zooService.createAnimal(req.body.animalType, req.body.animalName, req.body.animalAge, req.body.imageUrl);
    res.json(animal);
  } catch (err) {
    console.error(err);
    res.status(400).json({status: 400, message: err.message})
  }});

module.exports = router;
