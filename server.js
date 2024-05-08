const express = require("express");

const app  = express()

app.get("/testing" , (req,res) => {
    res.send("testing")
})

app.get("/sendotp" , (req,res) => {
    res.send("sendotp")
})

app.listen(3000, () => {
    console.log("listening at port number 8000")
})