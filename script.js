
function filterProducts(category){

let products=document.querySelectorAll(".product");

products.forEach(product=>{

if(category==="all"){
product.style.display="block";
}
else if(product.classList.contains(category)){
product.style.display="block";
}
else{
product.style.display="none";
}

});

}

let search=document.getElementById("search");

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".product").forEach(function(product){

let name=product.innerText.toLowerCase();

product.style.display=name.includes(value)?"block":"none";

});

});