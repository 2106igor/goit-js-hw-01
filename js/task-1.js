'use strict';

const quantity = 1;
const pricePerDroid = 1000;
const totalPrice = quantity * pricePerDroid;
function makeTransaction (quantity, totalPrice) {
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`)
}
