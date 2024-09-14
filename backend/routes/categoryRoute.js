
const express = require('express')
const router = express.Router();
const {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory,
    updateCategory,
} = require('../controllers/categoryController')

router.route('/').get(getAllCategory).post(createCategory);

router.route('/:id')
    .get(getCategoryById)
    .delete(deleteCategory)
    .put(updateCategory);

module.exports = router;