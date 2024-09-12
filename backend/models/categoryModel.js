const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'category is required'],
        minlength:[3,"Too short category name"],
        maxlength:[32,"Too long category name"],
    },
    //category name : accesory and pc ==> conver to ==> accesory-and-pc
    slug:{
        type:String,
        lowercase:true
    },
},{timestamps:true});

const CategoryModel = mongoose.model('Category',categorySchema)
module.exports = CategoryModel 