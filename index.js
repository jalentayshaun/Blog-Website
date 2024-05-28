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
var feedArray = [];
app.post("/update-feed", (req, res) => {

    var currentTime = new Date().toLocaleString();
    var subject = req.body["subject"];
    var message = req.body["post-message"];

    const data = {
        updateSuccessful: true,
        username: `<span class="username">colorful_clove</span>`,
        profilePicture: `<img src="main/images/svgs/user-regular.svg" alt="User Icon">`,
        timeStamp: `<small class="time-stamp">${currentTime}</small>`,
        postSubject: `<h3>${subject}</h3>`,
        postMessage: `<p>${message}</p>`
    };

    feedArray.push(data);
    console.log(feedArray.length);
    console.log(feedArray);
    
    res.render("index.ejs", {data, feedArray});
})

// Edit post
app.patch("/edit-post", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});