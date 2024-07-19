const express = require('express');
const router = express.Router();
const { dummyLink } = require('./controller/likeController');

// Mapping the route to the controller function 
router.get("/dummyroute", dummyLink); 

module.exports = router;
module.exports = routes;
