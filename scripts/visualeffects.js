const cartButtonEl = document.getElementById("cart");
const cartModal = document.querySelector(".user-cart-status");
const heroImg = document.querySelector(".main-image");

var images = [
    "./assets/images/image-product-1.jpg",
    "./assets/images/image-product-2.jpg",
    "./assets/images/image-product-3.jpg",
    "./assets/images/image-product-4.jpg"
]

cartButtonEl.addEventListener("mouseenter", openUserCart);


function openUserCart() {
    cartModal.style.display = "block";

    cartButtonEl.classList.add("filter-black")
    
    cartModal.addEventListener("mouseleave", () => {
        cartModal.style.display = "none";
        cartButtonEl.classList.remove("filter-black")
    })
}

function changeImage1() {
    heroImg.innerHTML = `<img src="${images[0]}" />`
}

function changeImage2() {
    heroImg.innerHTML = `<img src="${images[1]}" />`
}

function changeImage3() {
    heroImg.innerHTML = `<img src="${images[2]}" />`
}

function changeImage4() {
    heroImg.innerHTML = `<img src="${images[3]}" />`
}
