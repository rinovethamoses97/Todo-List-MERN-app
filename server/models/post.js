var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var postSchema=new Schema(
    {
        username:{
            type:String,
        },
        content:{
            type:String,
        },
        timeStamp:{
            type: Date, 
            default: Date.now,
        }
    }
)
module.exports=mongoose.model("post",postSchema);