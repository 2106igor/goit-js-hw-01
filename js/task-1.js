function makeTransaction(quantity, pricePerDroid) {
   const msg = (`You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`);
   return msg;
}