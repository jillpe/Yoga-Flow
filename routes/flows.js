var express = require('express');
var router = express.Router();
const flowsCtrl = require('../controllers/flows');

router.get('/', flowsCtrl.index);
router.get('/new', flowsCtrl.new);
router.get('/:id', flowsCtrl.show);
router.post('/', flowsCtrl.create);
router.delete('/:id', flowsCtrl.delete);
router.get('/:id/edit', flowsCtrl.edit);
router.put('/:id', flowsCtrl.update);

module.exports = router;
