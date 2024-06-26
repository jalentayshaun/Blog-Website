import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

// Home
app.get("/", (req, res) => {
    res.render("index.ejs", { feed: data });
})

// Post to feed
var feedArray = [];
app.post("/update-feed", (req, res) => {
    var currentTime = new Date().toLocaleString();

    const userPost = {
        username: "colorful_clove",
        profilePicture: `<img src="main/images/svgs/user-regular.svg" alt="User Icon">`,
        timeStamp: currentTime,
        subject: req.body.subject,
        message: req.body.message
    };

    feedArray.push(userPost);
    
    // Most recent posts at the top
    data = feedArray.slice().reverse(); // Make a shallow copy
    console.log(data);

    res.redirect("/");
})

// Edit post
app.patch("/edit-post", (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});