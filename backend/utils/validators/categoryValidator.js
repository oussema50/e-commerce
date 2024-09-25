const {check,validationResult} = require('express-validator')
const validatorMiddleware = require('../../middlewares/validatorMiddleware')
exports.getCategoryValidator = [check('id').isMongoId().withMessage('invalide category id'),validatorMiddleware]

exports.postCategoryValidator = 
[ 
    check('name').notEmpty().withMessage('cateogry Name is required ')
    .isLength({min:3}).withMessage('Too short category name')
    .isLength({max:32}).withMessage('Too long category name'),
    validatorMiddleware
]

exports.updateCategoryValidator = 
[
    check('id').isMongoId().withMessage('invalide category id'),
    validatorMiddleware
]

exports.deleteCategoryValidator = 
[
    check('id').isMongoId().withMessage('invalide category id'),
    validatorMiddleware
]