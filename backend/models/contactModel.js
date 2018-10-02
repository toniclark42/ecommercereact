const mongoose = require("mongoose");

const contactInfo = mongoose.model ("contactInfo", {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailInput: {
        type: String
    },
   comments: {
        type: String
    }
});

module.exports = { contactInfo };