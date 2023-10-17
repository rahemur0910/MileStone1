const calculateTotalCost = (cart) => {
    const totalCost = cart.reduce((acc,item) =>{
        const itemCost = item.unitPrice *item.quantity;
        return acc+itemCost;
    },0);
    return totalCost;
};

const cart = 
[
    {unitPrice: 10, quantity: 2},
    {unitPrice: 5, quantity: 4},
    {unitPrice: 15, quantity: 10}
];

const totalCost = calculateTotalCost(cart);
console.log(`Total cost: $${totalCost}`);