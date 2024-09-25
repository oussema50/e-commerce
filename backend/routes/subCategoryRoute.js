const express = require('express')
const router = express.Router();
const {createSubCategory,getAllSubCategory,getSubCategoryById,deleteSubCategory, updateSubCategory} = require('../controllers/subCategoryController')
const {
    getSubCategoryValidator,
    postSubCategoryValidator,
    deleteSubCategoryValidator,
    updateSubCategoryValidator,
} = require('../utils/validators/subCategoryValidator')
router.post('/',postSubCategoryValidator,createSubCategory)
router.get('/',getAllSubCategory)
router.get('/:id',getSubCategoryValidator,getSubCategoryById)
router.delete('/:id',deleteSubCategoryValidator,deleteSubCategory)
router.put('/:id',updateSubCategoryValidator,updateSubCategory)
module.exports = router;

