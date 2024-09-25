const SubCategoryModel = require('../models/subCategoryModel');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');

// @desc     Create A SubCategory
// @route    POST /SubCategory
// @access   Private
exports.createSubCategory = asyncHandler(async(req,res)=>{
    const {name,category} = req.body
    const subCategory = await SubCategoryModel.create({
        name,
        slug:slugify(name),
        category,
    })
    res.status(201).json({data:subCategory})
});


// @desc     Get List Of SubCategories with pagenation
// @route    GET /api/v1/category
// @access   Public

exports.getAllSubCategory = asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1
    const limit= req.query.limit || 5
    const skip = (page - 1) * limit
    //skip() is a method used to skip a specified number of documents in a query result.
    //find() is a method to make a query and get all the document and populate() also a method make a query an get all the document
    const subCategories = await SubCategoryModel.find().skip(skip).limit(limit).populate({path:'category',select:'name slug '});
    res.status(200).json({results:subCategories.length,page, data: subCategories });
});

// @desc     Get Specific SubCategory by id
// @route    GET /api/v1/subcategory/:id
// @access   Public

exports.getSubCategoryById = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    const subcategory = await SubCategoryModel.findById(id);
    if(!subcategory){
        return next(new ApiError(`No subCategory for this id ${id}`,404))
    }
    res.status(200).json({ data: subcategory });
});

// @desc     Delete A SubCategory
// @route    Delete /api/v1/subcategory/:id
// @access   Private

exports.deleteSubCategory = asyncHandler(async (req, res,next) => {
    const { id } = req.params;
    const deletedSubCategory = await SubCategoryModel.findByIdAndDelete(id);
    if (!deletedSubCategory) {
        return next(new ApiError(`No Subcategory for this id ${id}`,404))

    }
    res.status(200).json({ msg: 'SubCategory deleted' });
});

exports.updateSubCategory = asyncHandler(async(req,res,next)=>{
    const {id} = req.params
    const {name,category} = req.body
    const updateSubCategory = await SubCategoryModel.findOneAndUpdate({_id:id},{name,slug:slugify(name),category},{new:true})
    if(!updateSubCategory){
        return next(new ApiError(`No Subcategory For This Id ${id}`,404))
    }
    res.status(200).json({data:updateSubCategory})
})