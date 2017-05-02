var express = require("express");
var app = express();



app.get("/" , function(req, res){
   res.send("Up and running with express!");
});

//
app.get("/speak/:routeParam", function(req, res){
    var routeVal = req.params.routeParam;
    if (routeVal == "dog"){
        res.send("The " + routeVal + " says 'Woof Woof!'");
    }else if(routeVal == "cow"){
         res.send("The " + routeVal + " says 'Moo!'");
    }else if(routeVal == "pig"){
         res.send("The " + routeVal + " says 'Oink!'");
    }else{
         res.send("The " + routeVal + " says hi!'");
    }
    
});


//
app.get("/repeat/:routePar/:val" , function(req, res){
    var routeValue = req.params.routePar;
    var value = req.params.val;
    var result = " ";
    for (var i = 0; i < value; i++) {
      result += routeValue + " ";
   }
    res.send(result); 
});

//
app.get("*" , function(req, res){
    res.send("Wildcard,  page not found!");
})





app.listen(3000, function(){
    console.log("Server started!!!");
})