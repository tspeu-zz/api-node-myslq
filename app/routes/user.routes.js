const express = require('express');
const router = express.Router();
const user = require('../controllers/usuariosController');

// Create a new Data
// router.post('/', user.create);

  // Retrieve all menus
router.get('/',user.findAllUser );

  // Retrieve a single menu with menuId
 router.get('/:id', user.finOneUser);

 module.exports = router;