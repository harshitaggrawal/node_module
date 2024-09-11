const express = require('express');
const userController = require('../Controller/userController');
const { create, read, readById, updateByPut, updateByPatch, deleteById } = userController;

const router = express.Router();
router
    .post('/', create)
    .get('/', read)
    .get('/:id', readById)
    .put('/:id', updateByPut)
    .patch('/:id', updateByPatch)
    .delete('/:id', deleteById);


exports.router = router;