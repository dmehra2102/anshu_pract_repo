const fs = require("fs");
const file = 'file.txt';

fs.writeFile(file, "Hello world! I hope you are doing great.", function (err){
    if(err){
        console.log(err);
    }else{
        console.log("File has been succesfully excecuted.");
    }
});


const contents = fs.readFileSync(file);

console.log(contents);