const fs = require("fs");
function readUTF8File(filePath) {
    fs.readFile(filePath, "utf-8", (data,error)=> {
        if(error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
}

readUTF8File("./abcd.txt");
readUTF8File("./static/files/testFile.txt");
readUTF8File("./static/files/testFileDifferentEncoding.txt");