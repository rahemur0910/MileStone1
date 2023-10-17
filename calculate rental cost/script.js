function calculateRentalCost(carType, numDays) 
{
  let dailyCost;
  switch (carType) 
  {
    case "Ecpnomy":
      dailyCost = 4000;
      break;
    case "Midsize":
      dailyCost = 15000;
      break;
    case "Luxury":
      dailyCost = 20000;
      break;
    default:
      return "Invalid car type";
  }

  if (numDays < 1) 
  {
    return "Invalid number of days.";
  }

  const totalCost = dailyCost * numDays;
  return totalCost;
}

const carType = "Midsize";
const numDays = 5;
const totalCost = calculateRentalCost(carType, numDays);
console.log(`The total rental cost forr ${carType} for  ${numDays} days is Rs. ${totalCost}/-`);
