var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Hello Code Pipeline and Elastic Beanstalk - v2')
})

app.listen(port, function(){
  console.log('Server listening on ', port);
})
