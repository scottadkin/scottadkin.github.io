const fs = require('fs');

const dir = "lauren";
const files = fs.readdirSync(dir);

 




function removeCrap(files){

    const reg = /^.+_(.+)$/i;

    const output = [];

    let result = "";

    for(let i = 0; i < files.length; i++){

        result = reg.exec(files[i]);

        if(result != null){
            output.push(result[1]);
        }
    }

    return output;
}

console.log(files);
const fixedFiles = removeCrap(files);
console.log(fixedFiles);


fs.writeFile("output.txt", JSON.stringify(files), (err) =>{
    console.log(err);
});