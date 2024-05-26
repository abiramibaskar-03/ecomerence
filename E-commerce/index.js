//select navbar-toggle
let navbarMenuToggle = document.getElementById("popup-navbar-menu");
//select sidenavbar to OPEN sidenavbar
let sideNavbar = document.querySelector(".side-navbar");
navbarMenuToggle.addEventListener("click", function () {
  sideNavbar.style.left = "0";
})

//select xmarkid to CLOSE the sidenavbar
let xMark = document.getElementById("xmark");
xMark.addEventListener("click", function () {
  sideNavbar.style.left = "-60%";
})

//select productcontainer
let productContainer = document.querySelector(".product-container");

//select ALL div of productContainer
let products = document.querySelectorAll(".product-container div");

let enteredText="";
function checks(event) {
  
  //console.log(event.target.value);
  enteredText=event.target.value.toUpperCase();
  for(let i=0;i<products.length;i++){
    console.log(products[i].innerText)
    let items=products[i];
    let productItem=items.innerText.toUpperCase();
    if(productItem.indexOf(enteredText)<0){
       items.style.display="none";
    }
    else{
      items.style.display="block";
    }
  }

}
