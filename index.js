import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Home
app.get("/", (req, res) => {
    res.render("index.ejs");
})

// About
app.get("/about", (req, res) => {
    res.render("about.ejs");
})

// Contact page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

// Contact form message
app.post("/contact-message", (req, res) => {
    res.render("index.ejs");
})

// Post to feed
// var feedArray = [];
app.post("/update-feed", (req, res) => {
    var subject = req.body["subject"];
    var message = req.body["post-message"];
    const data = {
        // username: "colorful_clove",
        // profilePicture: "img",
        // timeStamp: "05.18.24 9:24PM",
        postSubject: `<h3>${subject}</h3>`,
        postMessage: `<p>${message}</p>`
    };
    // feedArray.push(postData);
    // console.log(feedArray[0].postSubject);
    res.render("index.ejs", data);
})

// Edit post
app.patch("/edit-post", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});