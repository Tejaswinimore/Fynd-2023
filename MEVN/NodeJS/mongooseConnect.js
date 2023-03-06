const { use } = require("express/lib/application");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017";

const userSchema = new mongoose.Schema(
    {
        id: Number,
        username: String,
        email: String,
    },
    { id: false }
);
const User = new mongoose.model("users", userSchema);
async function run() {
    try {
        await mongoose.connect(url);
        const user = User({username: "Tejaswini", email: "mpret123@gmail.com", id: 1 });
        await user.save();
        const docs = await User.find({});
        docs.forEach((doc) => console.log(doc));
    } catch(error) {
        console.error(error);
    }finally {
        await mongoose.disconnect();
    }
}
run();