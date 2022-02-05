const http = require('http')
const PORT = 8000;
const fs = require('fs');
let date = Date();
fs.writeFileSync('Time stemp/index.html',date)


http.createServer((req, res)=>{
    fs.readFile('Time stemp/index.html',(err,data)=>{
        res.writeHeader(200,{"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })

}).listen(PORT,()=>{
    console.log("Listening to",PORT)
});



// http.createServer((req, res)=>{
//     res.writeHeader(200,{"Content-Type": "text/html"});

//     // let data = [
//     //     {name: "smit"},
//     //     {name: "donda"}
//     // ]
//     // res.write(JSON.stringify(data));
//     // res.end();


// }).listen(PORT,()=>{
//     console.log("Listening to",PORT)
// });