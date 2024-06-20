const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req,res){
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num2 / (num1 * num1);
    res.send("The BMI result is: " + result);
})
app.listen(3000, function(){
    console.log("Server currently running on port 3000");
})

