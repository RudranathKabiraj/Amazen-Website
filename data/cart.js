// get the cart from local storage
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
    cart=[{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    } , {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];
}



function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));     //setitem takes 2 strings- 1st string is name, 2nd data we want to save
}
export function addToCart(productId) {
    // saving the matching items in a variable matchingItem
    let matchingItem;   
    cart.forEach( (cartItem) => {
        if (productId === cartItem.productId){

            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    }else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'      //for new product productid will be 1
        });
    }
    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach( (cartItem) => {
        if (cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;

    saveToStorage();
}

function updateDeliveryOption(productId , deliveryOptionId) {
    let matchingItem;   
    cart.forEach( (cartItem) => {
        if (productId === cartItem.productId){

            matchingItem = cartItem;
        }
    });

}