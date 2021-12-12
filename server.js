const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/users")

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signup-page')
.then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})

// engine
app.set('view engine', 'ejs')
app.use(express.static("public"));

// middleware
app.use(express.urlencoded({extended: true}))

app.get('/signup', async(req, res) => {
    res.render('signup');
});

app.use('/', userRoutes)


// Starting server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON ${port}`)
});