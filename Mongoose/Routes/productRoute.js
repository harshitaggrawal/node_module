const express = require('express');
const productController = require('../Controller/productConntroller');
const { create, read, readById, updateByPut, updateByPatch, deleteById } = productController;

const router = express.Router();
router
    .post('/', create)
    .get('/', read)
    .get('/:id', readById)
    .put('/:id', updateByPut)
    .patch('/:id', updateByPatch)
    .delete('/:id', deleteById);


exports.router = router;