const connectToMongo = require('mongoose')

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,

    },
    tag:{
        type:String,
        defalut:"general"
 },
    date:{
        type:String,
        defalut:Date.now
    },
    
  });
  
  module.exports =mongoose.model('notes',NotesSchema);

