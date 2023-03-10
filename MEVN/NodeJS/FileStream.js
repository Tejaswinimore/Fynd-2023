//the FilesStream module to read contents of a text file
const fs = require("fs");

function readFileStream(filePath){
    fs.readFile(filePath,"utf-8",(data,error) =>{
        if(error){
            console.log(error);
        }
        console.log(data);
    });
}

readFileStream("./Demo2.txt");