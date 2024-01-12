function makeTransaction(quantity, totalPrice) {
   const msg = (`You ordered ${quantity} droids worth ${totalPrice} credits!`);
   return msg
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"