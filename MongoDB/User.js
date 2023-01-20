const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})
const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max: 100,
        validate:{
            validator: v => v%2 === 0,
            message: props => `${props.value} is not an even number`,
        },
    },
    email:{
        type:String,
        minLength: 10,
        required: true,
        lowercase:true
    },
    createdAt : {
        type: Date,
        immutable: true,
        // default: new Date()
        default: () =>Date.now(),
    },
    updatedAt: {
        type:Date,
        default: () => Date.now(),
    },
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies:[String],
    address:addressSchema,
})

userSchema.method.sayHi = function(){
    console.log(`Hi. My name is ${this.name}`)
}
userSchema.statics.findByName = function(name){
    return this.where({name : new RegExp(nmae,'i')})
}
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, 'i')});
}

userSchema.post("save",function(doc,next){
    doc.sayHi();
    next()
})
module.exports = mongoose.model("User",userSchema);