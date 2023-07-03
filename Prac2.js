console.log("Connected");
const api_url3="https://dog.ceo/api/breeds/image/random";

// function fax() {
//     console.log()
//     let start = new Date();
//     for (i = 0; i < 1350000000; i++) {

//     }
//     let end = new Date();
//     console.log((end - start) / 1000);
//     return((end - start) / 1000);
// }

function main() {
    // Product details
    const productImage = "download.png";
    const productDescription = "Mercedes G-Class";
    const productOffer = "Get 10% off on your first purchase!";
    const productAddress = "1234 Main Street, City, State, Country";

    // Inserting product details into HTML
    const productContainer = document.getElementById("product-container");

    // Insert product image
    const imageElement = document.createElement("img");
    imageElement.src = productImage;
    imageElement.style.width="700px";
    imageElement.style.height="500px";
    productContainer.appendChild(imageElement);

    // Insert product description
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = productDescription;
    productContainer.appendChild(descriptionElement);

    // Insert product offer
    const offerElement = document.createElement("p");
    offerElement.textContent = productOffer;
    productContainer.appendChild(offerElement);

    // Insert product address
    const addressElement = document.createElement("p");
    addressElement.textContent = productAddress;
    productContainer.appendChild(addressElement);

}

// const Mypro = new Promise((resolve,reject)=>{
//     let a=fax();
//     if(a<5){
//         resolve("reject")
//     }
//     else{
//         reject("reject")   
//     }
// });

// Mypro.then((a)=>{
//     console.log(a);
// }).catch((a)=>console.log(a))

let cnt2=0;

async function calldogsAPI(){
    if(cnt2!=0)
        document.getElementById("dogs").innerHTML=null;
    let i=1
    for(let j=i;j>0;j--){
        const responseData3= await fetch(`${api_url3}`)
        const data3= await responseData3.json();
        // console.log(data3);
        document.getElementById("dogs").innerHTML += `<img src=${data3.message} style="width: 500px"></br>`;
    }
    cnt2++
}

calldogsAPI();
main()