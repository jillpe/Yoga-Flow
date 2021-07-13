var express = require('express');
var router = express.Router();
const posesCtrl = require('../controllers/poses') 

router.post('/flows/:id/poses', posesCtrl.create)

module.exports = router;