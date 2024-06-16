const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://dakshkala04:<password>@daksh.8q47cxa.mongodb.net/?retryWrites=true&w=majority&appName=Daksh");

const todoschema = mongoose.Schema({
  title: String,
  description : String,
  completed : Boolean
});

const todo = mongoose.model("todos", todoschema);

module.exports = {
  todo
}
