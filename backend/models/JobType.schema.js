const {Schema,model}=require("mongoose");


const EducationTypeSchema=Schema({
    title:{type:String},
    text:{type:String}

})

const EducationTypeModel=model("Education",EducationTypeSchema)
module.exports=EducationTypeModel