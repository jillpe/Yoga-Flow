var express = require('express');
var router = express.Router();
const flowsCtrl = require('../controllers/flows');

/* GET users listing. */
router.get('/', flowsCtrl.index);
router.get('/new', flowsCtrl.new);
router.get('/:id', flowsCtrl.show);
router.post('/', flowsCtrl.create);

module.exports = router;
