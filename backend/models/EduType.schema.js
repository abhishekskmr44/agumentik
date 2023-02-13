const {Schema,model}=require("mongoose");


const educationTypeSchema=Schema({
    title:{type:String},
    text:{type:String}

})

const educationTypeModel=model("education",educationTypeSchema)
module.exports=educationTypeModel