const mongoose = require('mongoose');
const User = require("./User")

// try{
//     mongoose.connect("mongodb://127.0.0.1:27017/testdb");
// }catch(e){
//     console.log(e);
//     console.log("Testing");
// }


async function run(){
    // const user = await User.create({name:"kali",age:26});
    try{
        await mongoose.connect("mongodb://localhost:27017/testdb");
        const user = new User({name:"kali",
        age:26,
        email:"test@gmail.com",
        hobbies:["weight Lifting","Bowing"],
        address:{
            street:"Main St",
        }
    });
        await user.save();
        user.name = "Sally";
        await user.save();
        console.log(user)
        // const user = await User.deleteOne({name: "Kyle"})
        // const user = await User.where("age").gt("12")
        // const user = await User.exists({name: "Kyle"})
        // const user = await User.find({name: "s"})
        // const user = await User.where("name").equals("Kyle")
        // const user = await User.where("age").gt("12").where("name").equals("Kyle")
    }
    catch(e){
        console.log(e);
        console.log("Testing");
    }
}
run()

async function writeuser(){
    const user = new User({name:"kali",age:26});
    await user.save();
    user.name = "Sally";
    await user.save();
}

writeuser();

// try {
//     await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// } catch (error) {
//     console.error(error);
// }