const {check} = require('express-validator')
const validatorMiddleware = require('../../middlewares/validatorMiddleware')
exports.getSubCategoryValidator = [check('id').isMongoId().withMessage('invalide Subcategory id'),validatorMiddleware]

exports.postSubCategoryValidator = 
[ 
    check('name').notEmpty().withMessage('subCateogry Name is required ')
    .isLength({min:2}).withMessage('Too short Subcategory name')
    .isLength({max:32}).withMessage('Too long Subcategory name'),
    check('category').isMongoId().withMessage(' Subcategory must belong to category')
    .notEmpty().withMessage("category must be required"),
    validatorMiddleware
]

exports.updateSubCategoryValidator = 
[
    check('id').isMongoId().withMessage('invalide Subcategory id'),
    validatorMiddleware
]

exports.deleteSubCategoryValidator = 
[
    check('id').isMongoId().withMessage('invalide Subcategory id'),
    validatorMiddleware
]