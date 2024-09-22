const express = require('express')
const router = express.Router();
const {
        getCategoryValidator,
        postCategoryValidator,
        deleteCategoryValidator,
        updateCategoryValidator
    } = require('../utils/validators/categoryValidator')

const {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory,
    updateCategory,
} = require('../controllers/categoryController')

router.route('/').get(getAllCategory).post(postCategoryValidator,createCategory);

router.route('/:id')
    .get(getCategoryValidator,getCategoryById)
    .delete(deleteCategoryValidator,deleteCategory)
    .put(updateCategoryValidator,updateCategory);

module.exports = router;

