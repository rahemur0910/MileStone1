const calculateDiscountPercentage = (orginalPrice, discountedPrice) => {
    if(origianlPrice <= 0 || discountedPrice <=0)
    {
        throw new Error('Both original and discounted price must be greater than zero.');
    }

    const discountAmount = orginalPrice - discountedPrice;
    const discountPercentage = (discountAmount /origianlPrice) * 100;

    return parseFloat(discountPercentage.toFixed(2));
};

const orginalPrice = 100;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(orginalPrice,discountedPrice);

console.log(`You save ${discountPercentage}% on this product!`);