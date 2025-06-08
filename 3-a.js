//Write a javascript closure to calculate net price of a product along with tax.

function createCalc(tax) 
{
  return function(price) 
  {
    return price + (price * tax);
  }
}

const gstCalc = createCalc(0.18); 
console.log(gstCalc(1000)); 

// createTaxCalculator is a closure that takes a tax rate (like 0.18 for 18%).

// It returns another function that, when called with a price, calculates the net price including tax.
