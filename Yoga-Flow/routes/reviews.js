var express =require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/flows/:id/reviews', reviewsCtrl.create);

module.exports = router;
