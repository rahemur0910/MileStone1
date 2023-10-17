function calculateBill(dishCosts,numPoeple)
{
    const totalBill = dishCosts.reduce((acc,cost) => acc + cost, 0);
    const billperPerson = totalBill / numPoeple;

    const billDetails = {
        totalBill: totalBill,
        billperPerson: billperPerson
    };

    return billDetails;
}

const dishCosts = [10,15,20,25.50,100,25,63,120];
const numPoeple = 4;

const result = calculateBill(dishCosts,numPoeple);
console.log(result);