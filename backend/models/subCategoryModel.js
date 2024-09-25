const mongoose = require('mongoose')
const Category = require('./categoryModel')
const SubCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"subCategory must be unique"],
        minlength:[2,"Too short subcategory name"],
        maxlength:[32,"Too long subcategory name"],
    },
    slug:{
        type:String,
        lowercase:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:Category,
        require:[true,'subCategory must belong to a Category']
    }
},{timestamps:true});
const SubCategoryModel = mongoose.model('SubCategory',SubCategorySchema)
module.exports = SubCategoryModel 