// dependencies 
const path = require("path");

// routing through our HTML pages

module.exports = app => {

    app.get("/survey", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // making our default page to route towards home.html
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

};