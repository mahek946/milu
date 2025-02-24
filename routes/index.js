var express = require('express');
var router = express.Router();
var mahek = require('../controller/usercontroller');

router.post('/',mahek.insert);
router.get('/get',mahek.get_data);
router.get('/update/:id',mahek.get_update_data);
router.post('/update/:id',mahek.update_data);
router.get('/delete/:id',mahek.delete_data);
router.post('/login',mahek.login);

module.exports = router;