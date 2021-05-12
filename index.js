// <!-- =======================================================
// * Template Name: Task
// * Template URL: https://github.com/malode-ganesh
// * Author: Ganesh Malode.
// * Link: https://ganesh-malode.netlify.app/
// ======================================================== -->

let counter = 0;
let finalPrice = 0;

function add(){
    counter = counter+1;
    finalPrice = finalPrice+344;
    document.getElementById("value").innerHTML = counter;
    //console.log(finalPrice);
    document.getElementById("price").innerHTML= finalPrice;
}
function remove(){
    counter = counter-1;
    finalPrice = finalPrice-344;

    if(counter<0 && finalPrice<0){
        counter=0;
        finalPrice=0;
    }
   
    document.getElementById("price").innerHTML= finalPrice;
    document.getElementById("value").innerHTML = counter;
}
function addToCart(){
    alert(`Total items added ${counter} Price :$${finalPrice} `);
}
