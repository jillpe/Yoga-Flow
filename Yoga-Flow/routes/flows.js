var express = require('express');
var router = express.Router();
const flowsCtrl = require('../controllers/flows');

router.get('/', flowsCtrl.index);
router.get('/new', flowsCtrl.new);
router.get('/:id', flowsCtrl.show);
router.put('/:id', flowsCtrl.update);
router.delete('/:id', flowsCtrl.delete);
router.post('/', flowsCtrl.create);

module.exports = router;
