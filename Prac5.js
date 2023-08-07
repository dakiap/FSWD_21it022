import url from 'url';
import ReadLine from 'readline';
import path from 'path'
import qs from 'querystring';
import fs from 'fs';

const r = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// task 1.1
// function parseURL(inputURL) {
//     const parsedURL = url.parse(inputURL, true);

//     console.log('Protocol:', parsedURL.protocol);
//     console.log('Host:', parsedURL.host);
//     console.log('Path:', parsedURL.pathname);
//     console.log('Query Parameters:', parsedURL.query);
//     return;
// }

// r.question('Enter a URL: ', (input) => {
//     parseURL(input)
//     r.close();
// });

// task 1.2
// r.question('Enter a BaseURL and Path seperated by , : ', (inputURL) => {
//     const [base,path] = inputURL.split(",");
//     absoluteurl(base,path);
//     r.close();
// });

// function absoluteurl(baseURL, relativePath) {
//     const absoluteURL = url.resolve(baseURL, relativePath);
//     console.log("Absolute URL:", absoluteURL);
//     return absoluteURL;
// }

// //task2
// function parseURL(inputURL) {
//     const parsedURL = url.parse(inputURL, true);
//     console.log('Query Parameters:', parsedURL.query);
//     return;
// }

// r.question('Enter a URL with querystring: ', (input) => {
//     parseURL(input)
//     r.close();
// });

// const p1 = r.question("Enter the first path: ",(input)=>{
    
// });

//task 3.1
// r.question ("Enter path's of two files separate by ',': ",function (string){
//     let [firstfile,secondfile]=string.split(',');
//     if(path.relative(firstfile,secondfile)==0){
//         console.log("Both path refer to same file.")
//     }
//     else{
//         console.log("Both path don't refer to same file.")
//     }
// })

//task 3.2
// r.question ("Enter path of file: ",function (string){
//     console.log(path.extname(string))
// })

//task 4.1
// r.question ("Enter path of file: ",function (string){
//     console.log(`Directory name : ${path.dirname(string)}`);
//     console.log(`Base name : ${path.basename(string)}`);
// })


//task 4.2
// let filepath="../FSWD/first.txt";
// function checkpath(filepath){
//     try{    
//         fs.access(filepath,function(error,data){
//             if(error){
//                 throw new Error("file not found");
//             }
//             else{
//                 console.log("file exists");
//             }
//         })
        
//     }catch(e){
//         console.log(e.message);
//     }
// }
// checkpath(filepath);