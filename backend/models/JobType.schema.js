const {Schema,model}=require("mongoose");


const JobTypeSchema=Schema({
    title:{type:String},
    text:{type:String}

})

const JobTypeModel=model("job",JobTypeSchema)
module.exports=JobTypeModel