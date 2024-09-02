// const http = require("http");

// http.createServer((req,res)=>{
//     res.write("finally created the server")
//     res.end()
// }).listen(3000)

//another way of combining of two modules files and http modles
/*
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res) {
	fs.readFile('demo.txt',function(err,data){

		res.writeHead(200,{'content-type':'text/html'});
		res.write(data);
		return res.end();
	})
}).listen(8080);*/

//importing the local modules and perform the operations
const {addnumbers,mulnumbers,subnumbers}=require("./local-modules")
console.log(addnumbers(10,2))
console.log(mulnumbers(10,4))

var balaji= require('http');
 	balaji.createServer(function(req,res){
	
	res.write('Hello worlds!');
	res.write(req.url);
	res.end();

}).listen(8080);