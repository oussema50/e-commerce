const express = require('express')
const router = express.Router();
const {createCategory,getAllCategory,getCategoryById,deleteCategory,updateCategory} = require('../controllers/categoryController')
router.get('/',getAllCategory)
router.get('/:id',getCategoryById)
router.post('/',createCategory)
router.delete('/:id',deleteCategory)
router.put('/:id',updateCategory)
module.exports = router;
