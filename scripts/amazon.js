//Rule 1. Put all imports at the top pf the file

//import { cart as myCart} from "../data/cart.js";  
//const cart=[]; // will get naming conflict if 'as myCart' is not used above

// .. represents the folder outside of the current folder
import { cart , addToCart } from "../data/cart.js";    //will import only cart vatiable out of the file cart.js
import { products } from "../data/product.js"; 


let productsHTML = '';
// Generating the html through JS
products.forEach( (product) => {
    productsHTML +=   `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars" 
            src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
        </div>
        
        <div class="product-price">
            ₹${(product.price / 10).toFixed(1)}
        </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png" alt="check">Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart</button>

        </div>`;
})
console.log(productsHTML);

// Attaching the productName to the button using a a data attribute and when we click the button we got the pdocut name out

// Using DOM to put the html to amazon.html
document.querySelector('.js-products-grid').innerHTML=productsHTML;

// syntax for data attribute - have to start with data,give it any name

/*      Step:1 - check if the product is already in the cart
        Step:2 - If it is in the cart increase the quantity
        Step:3 - If it is not in the cart , add it to the cart
*/

function updateCartQuantity(){
    // variable to store total quantity
    let cartQuantity = 0;

    // calculating total quantity
    cart.forEach( (cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    // Getting the element js-cart-quantity into js using DOM

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
.forEach( (button) => {
    button.addEventListener('click' , () => {
        const productId = button.dataset.productId;   // product-id(kebab case changes to camel case) productID
        addToCart(productId);
        updateCartQuantity();
        // Function makes code easy to understand like here while clicking add to cart button both function wil get called

    });
});
