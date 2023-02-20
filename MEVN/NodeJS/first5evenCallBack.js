const fs = require("fs");
function readFirstFiveCallback(error, fileData) {
    if (error) {
        console.error(error);
        return;
    }
    const Lines=fileData.toString().split("\n");
    Lines.slice(0,5).forEach((Line)=> {
        console.log(Line);
    });

    fs.readFile("./static/files/tenEvenNumbers", readFirstFiveCallback);
    
}