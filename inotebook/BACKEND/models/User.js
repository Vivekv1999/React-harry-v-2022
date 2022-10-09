const connectToMongo = require('mongoose')

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        defalut:Date.now
    },
    
  });

  module.exports =mongoose.model('user',UserSchema)