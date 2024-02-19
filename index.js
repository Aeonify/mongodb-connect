const mongoose = require("mongoose");
const usrModel = require("./models/user.schema");

// MongoDB database connection URL.
const dbLocation = "mongodb://localhost:27017/example";

// Establish connection to the MongoDB database.
mongoose.connect(dbLocation);

// Database connection.
const database = mongoose.connection;

// If connected to the database.
database.once('open', () => {
    console.log("Connected to Mongodb Database!");
    pushData(); // Pushing data
});

// Else any error while connecting.
database.on('error', (error) => {
    console.log("Error while connection!", error);
});


async function pushData() {
    const usrinfo = {
        name: "Kai0071",
        age: 17
    }
    const pushDone = await usrModel.create(usrinfo);
    console.log("Successfully Pushed Into Database!\n", pushDone);
};

