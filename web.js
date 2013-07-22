var express = require('express');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) 
{
    //response.send('Hello World 2!');
   var fs = require('fs');
   //var buf = new Buffer("Test buffer string!", "utf-8");
   //    response.send ( buf.toString('utf-8') );

    var buf = fs.readFileSync("index.html");
    response.send ( buf.toString('utf-8') );
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
