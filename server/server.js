var express=require("express");
var cors=require("cors");
var app=express();
var mongoose=require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// mongoose.connect('mongodb://localhost:27017/ToDo'); //for local db
mongoose.connect('mongodb://rino:rino1234@ds159216.mlab.com:59216/todo')
mongoose.connection.on('connected',function(){
    console.log("Mongo Db connected");
});
mongoose.connection.on('error',function(err){
    if(err){
        console.log(''+err);
    }
});
var Post=require("./models/post");
app.get('/',function(req,res){
    res.send("Hello");
});
app.post("/getContent",function(req,res){
    console.log("Check");
    Post.find(function(err,posts){
        if(err){
            res.send({status:"error"});
        }
        else{
            res.send({status:"success",data:posts});
        }
    });
});
app.post("/deleteContent",function(req,res){
    Post.findByIdAndDelete({_id:req.body.id},function(err){
        if(err){
            res.send({status:"error"});
        }
        else{
            res.send({status:"success"});
        }
    })
})
app.post('/addContent',function(req,res){
    console.log(req.body.content);
    var post=new Post({
        content:req.body.content,
        timeStamp:new Date()
    });
    post.save(function(err,post){
        if(err){
            console.log(err);
            res.send({staus:"error"});
        }
        else{
            res.send({status:"success",data:post});
        }
    })
})
app.listen(process.env.PORT||3001,function(){
    console.log("Server running!!");
});