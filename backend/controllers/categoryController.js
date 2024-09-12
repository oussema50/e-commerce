const CategoryModel = require('../models/categoryModel')
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

// @desc     Create A Category
// @route    POST /category
// @access   Private

exports.createCategory = (req,res)=>{
    const {name} = req.body
    CategoryModel.create({
        name,
        slug:slugify(name)
    })
    .then((catecory)=>res.status(201).json({data:catecory}))
    .catch((err)=>res.status(400).send(err));
}

// @desc     Get List Of Categories with pagenation
// @route    GET /api/v1/category
// @access   Public

exports.getAllCategory = asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1
    const limit= req.query.limit || 5
    const skip = (page - 1) * limit
    //skip() is a method used to skip a specified number of documents in a query result.
    const categories = await CategoryModel.find().skip(skip).limit(limit);
    res.status(200).json({results:categories.length,page, data: categories });
});

// @desc     Get Specific Category by id
// @route    GET /api/v1/category/:id
// @access   Public

exports.getCategoryById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    if(!category){
        res.status(404).json({msg:`No category for this id ${id}`})
    }
    res.status(200).json({ data: category });
});

// @desc     Delete A Category
// @route    Delete /api/v1/category/:id
// @access   Private

exports.deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedCategory = await CategoryModel.findByIdAndDelete(id);
    if (!deletedCategory) {
        return res.status(404).json({ msg: 'Category not found!' });
    }
    res.status(200).json({ msg: 'Category deleted' });
});

// @desc     Update Specific Category
// @route    PUT /api/v1/category/:id
// @access   Private

exports.updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) });
    if (!updatedCategory) {
        return res.status(404).json({ msg: 'Category not found!' });
    }
    res.status(200).json({ msg: 'Category is updated!' });
});
