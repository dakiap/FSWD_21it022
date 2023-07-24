console.log("Connected");

import { default as chalk } from "chalk";
import { default as upper_case} from "upper-case";
import http from "http";
import os from "os";
import { app } from "./Module.js"
const port = 3001;
const host = 'localhost'

function mem(){
    let total_mem = Math.round(os.totalmem()/(1024*1024*1024));
    let free_mem = Math.round(os.freemem() /(1024*1024*1024));
    let per_mem = Math.round((free_mem*100)/total_mem);
    let opt = JSON.stringify({
        Total_Memory : total_mem,
        Free_Memory : free_mem,
        Free_Memory_Percentage : per_mem,
    });
    return opt;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === `/os`) {
        res.end(JSON.stringify({
            username: `${os.userInfo().username}`,
            homeDirectory: `${os.homedir()}`,
            platform: `${os.platform()}}`,
            Memory_Data : mem(),
        }));
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify({
            message: "Invalid Path"
        }));
    }
}).listen(port, () => {
    console.log(chalk.blue.underline(`server running at ${host}:${port}`));
    console.log(upper_case.upperCase(`Hello World`));
});

let ans = app(3,4,'+');
console.log(ans);

// const options = {
//     method: 'POST',
//     path: '/os',
//     port: 3001,
// };

// const req = http.request(options, (res) => {
//     let data=''

//     res.on('data' , (chunk)=>{
//         data+=chunk;
//     })

//     res.on('end', ()=>{
//         const obj=JSON.parse(data);
//         console.log(obj);
//     })

// }).on("error", (err) => {
//     console.log("Error: ", err)}).end();