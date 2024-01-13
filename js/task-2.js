function getShippingMessage (country, price, deliveryFee) {
    const msg = (`Shipping to ${country} will cost ${price + deliveryFee} credits`);
    return msg;
}