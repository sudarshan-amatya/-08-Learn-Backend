const fs = require("fs");
// //sync...
// fs.writeFileSync("./4. File handling/text.txt","My First file handling in js.");

// //file read garda variable ma rakhnu parxa and encoding ko lagi utf-8 dinu parxa for txt file
// const result =fs.readFileSync("./4. File handling/text.txt", "utf-8");
// console.log(result);

// fs.appendFileSync("./4. File handling/text.txt","\nText appended.")
// fs.copyFileSync("./4. File handling/text.txt","./4. File handling/copy.txt")
// fs.unlinkSync("./4. File handling/copy.txt") //For to delete file

// //Async..
//  async function ma function pathaunu parxa
// fs.writeFile("./4. File handling/text2.txt","Async file.",err=>{
//     console.log(err)
// })


// //Async read garda return gardaina function vitra result console dinu parxa
// fs.readFile("./4. File handling/text2.txt", "utf-8", (error, result) => {
//     if (error) {
//         console.log("error:", error);
//     }
//     else {
//         console.log(result)
//     }
// })

// fs.copyFile("./4. File handling/text2.txt","./4. File handling/copy2.txt",err=>{})
// fs.unlink("./4. File handling/copy2.txt",err=>{}) //For to delete file
