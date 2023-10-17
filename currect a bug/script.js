function doubleItems(cart)
{
    const correctedCart = []

    for(const item of cart)
    {
        const correctedItem = 
        {
            ...item,
            quantity: item.quantity * 2,
        }
        correctedCart.push(correctedItem);
    }
    return correctedCart;
}

const cart = 
[
    {product: 'product A', quantity: 3},
    {product: 'product B', quantity: 5},
    {product: 'product C', quantity: 7},
    {product: 'product D', quantity: 9},
    {product: 'product E', quantity: 11},
];

const correctedCart = doubleItems(cart);
console.log(correctedCart);