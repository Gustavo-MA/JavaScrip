app.get('/', function (req, res) {
    res.sendFile('index.html');
 });
 const path = require('path');
 comando:path.join(__dirname)
 path.join(__dirname+'/index.html')
 path.join(__dirname+'/html/index.html')
 app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
 });