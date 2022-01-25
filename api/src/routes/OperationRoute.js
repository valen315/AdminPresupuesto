const { Router } = require('express');

const router = Router();
const operationController = require('../controllers/operationController');

router.post('operation/addOperation',operationController.addOperation)
router.get('operation/allOperation', operationController.getAllOperation)

module.exports = router;