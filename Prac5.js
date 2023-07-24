import url from 'url';
import ReadLine from 'readline';

const rd = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//task 1
// function parseURL(inputURL) {
//     const parsedURL = url.parse(inputURL, true);

//     console.log('Protocol:', parsedURL.protocol);
//     console.log('Host:', parsedURL.host);
//     console.log('Path:', parsedURL.pathname);
//     console.log('Query Parameters:', parsedURL.query);
//     return;
// }

// rd.question('Enter a URL: ', (input) => {
//     parseURL(input)
//     rd.close();
// });

//task 2
// rd.question('Enter a BaseURL and Path seperated by , : ', (inputURL) => {
//     const [base,path] = inputURL.split(",");
//     absoluteurl(base,path);
//     rd.close();
// });

// function absoluteurl(baseURL, relativePath) {
//     const absoluteURL = url.resolve(baseURL, relativePath);
//     console.log("Absolute URL:", absoluteURL);
//     return absoluteURL;
// }

// //task3
// function parseURL(inputURL) {
//     const parsedURL = url.parse(inputURL, true);
//     console.log('Query Parameters:', parsedURL.query);
//     return;
// }

// rd.question('Enter a URL with querystring: ', (input) => {
//     parseURL(input)
//     rd.close();
// });

// const p1 = rd.question("Enter the first path: ",(input)=>{
    
// });