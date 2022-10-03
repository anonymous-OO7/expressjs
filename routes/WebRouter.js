
const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController.js');
const AboutContoller = require('../controllers/AboutController.js');

// import { HomeController } from '../controllers/HomeController';
// import { AboutContoller } from '../controllers/AboutController';


router.get('/' , HomeController);

router.get('/about' , AboutContoller);


module.exports = router;
