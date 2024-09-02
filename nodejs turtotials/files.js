const fs=require('fs');
fs.readFile('demo.txt','utf8',(err,output)=>{
    if(err) throw err;
    console.log(output);
})


// fs.writeFile("demo1.txt","hi dljffmnjflkdiq",(error,output)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(output);
// })


// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// fs.rename("mynewfile2.txt","demowriting.html",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("modified")
//     }
// })


fs.unlink("demo1.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted")
    }
})
