const express = require('express');
const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const router = express.Router();

router.get('/', sauceCtrl.getAllSauce)
// router.get('/:id',)
router.post('/', auth, multer, sauceCtrl.createSauce)
// router.put('/:id', auth)
// router.delete('/:id', auth)
// router.post('/:id/like', auth)

module.exports = router;