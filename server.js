var Express = require('express');


var server = Express();


server.use(Express.static(__dirname+'/public'))

// server.get("/",function(req,res){
// 	console.log("....");
// 	res.sendFile('index.html');
// })


server.listen(4000, function(){

console.log("server up");

})