const product_Listed = document.getElementById("user-product-listed");
const minus_Button = document.getElementById("minus");
const plus_Button = document.getElementById("plus");
const user_Number = document.querySelector(".user-number");
const add_Cart = document.querySelector(".btn-content");
const currentProductStatus = document.getElementById("currentProductStatus")
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal_Mobile = document.querySelector(".menu-modal-mobile")

var thumbnail_Img = "./assets/images/image-product-1-thumbnail.jpg"
var closeButton = "./assets/images/icon-delete.svg"


let productCounterValue = 1;

add_Cart.addEventListener("click", addProductIntoCart);
minus_Button.addEventListener("click", decreaseProductAmount);
plus_Button.addEventListener("click", increaseProductAmount);
openBtn.addEventListener("click", openMenuMobile);
closeBtn.addEventListener("click", closeMenuMobile);

const Product = {
    total: function () {
        let valueSelectedByUser = Number(user_Number.innerHTML);
        return valueSelectedByUser * 125
    },

    selected: value => {
        if ((productCounterValue + value) > 0) {
            productCounterValue += value;
            user_Number.innerHTML = productCounterValue
        }
    },

    delete: () => {
        product_Listed.innerHTML = ""
        return currentProductStatus.innerHTML = "Your cart is empty."
    }
}

function addProductIntoCart() {
    let valueSelectedByUser = user_Number.innerHTML
    product_Listed.innerHTML = valueSelectedByUser

    if (product_Listed.innerHTML > 0) {
        currentProductStatus.innerHTML = `
        <div class="products-in-cart">
            <img src="${thumbnail_Img}" alt="thumbnail cart image" />
            <button class="deleteBtn" onclick="Product.delete()">
                <img src="${closeButton}" />
            </button>

            <div class="details"> 
                <div> 
                    Fall Limited Edition Sneakers 
                </div> 
                <div> 
                    $125.00 x ${valueSelectedByUser} 

                    <span class="total-value"> 
                        $${Product.total()}.00 
                    </span> 
                </div>
                
                
                </div>
                <button class="check"> Checkout </button>
        </div>
        `
    }
}


function decreaseProductAmount() {
    return Product.selected(-1)
}

function increaseProductAmount() {
    return Product.selected(1)
}

function openMenuMobile() {
    modal_Mobile.style.display = "flex"
}

function closeMenuMobile() {
    modal_Mobile.style.display = "none"
}