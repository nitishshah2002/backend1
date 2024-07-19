const mongoose = require('mongoose');

//route handlers 

const commentSchema = new mongoose.Schema({
    post: {
       type: mongoose.Schema.Types.ObjectID,
       ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },

})

module.exports = mongoose.model('Comment',commentSchema);