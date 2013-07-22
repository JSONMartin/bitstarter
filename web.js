var express = require('express');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) 
{
  //response.send('Hello World 2!');
    var fs = require('fs');
   var buffer = new Buffer(
 fs.readFileSync('index.html', function (err, data)
		    {
			if (err) throw err;
			console.log(data);
		}), "utf-8");
    buffer.toString('utf-8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
