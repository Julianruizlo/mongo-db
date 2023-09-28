const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const User = new Schema ({


id:{
    type:Number,
    require:true

},
    name:{
    type:String,
    require: true
},
lastname:{
    type:String,
    require: true
},
birthdate:{
    type: Date,
    require: false
}
}, {collection: "users"});

module.exports = User;