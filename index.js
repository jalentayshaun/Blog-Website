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
app.post("/update-feed", (req, res) => {
    res.render("index.ejs");
})

// Edit post
app.patch("/edit-post", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});