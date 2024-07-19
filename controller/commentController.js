const post = require("../models/postModel");

const comment = require("../models/commentModel");

//business logic 

exports.createComment = async(req, res, ) => {
    try{
        const{post,user,body}=res.body;

        const comment = new Comment({
            post,user,body
        })

        //save the new comment in the database

        const savedComment = await Comment.save();
    }
}