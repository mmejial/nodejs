const mongoose = require('mongoose')

const schema = mongoose.Schema;


const mySchema = new schema({
   user:String,
   message:String,
   date:Date, 
})

const model = mongoose.model('Message', mySchema)
module.exports=model