var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) 
	{
	    var fs = require('fs');

	    var buf = fs.readFileSync("bootstrap_template.html");
	    response.send ( buf.toString('utf-8') );
	}
);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});