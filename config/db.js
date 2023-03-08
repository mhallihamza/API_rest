// Export mongoose
const dotenv = require("dotenv");
const  mongoose = require("mongoose");
dotenv.config({ path: './config/config.env' });
//Assign MongoDB connection string to Uri and declare options settings
const  uri = process.env.URI;
// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});