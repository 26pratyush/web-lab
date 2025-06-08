//Write a java script program to convert month number to month name using closures.
//If the user enters a number less than 1 or greater than 12 or a non-number, have the function write "Bad Number" in the monthName field.
//If the user enters a decimal between 1 and 12 (inclusive), strip the decimal portion of the number.

function monthConverter() 
{
  const names = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

  return function(month) 
  {
    const num = parseInt(month, 10);
    
    if (num >= 1 && num <= 12) 
    {
      return names[num - 1];
    } 
    else {
      return "Bad Number";
    }
  }
}

const convertMonth = monthConverter();

console.log(convertMonth("3"));     // March
console.log(convertMonth("7.9"));   // July
console.log(convertMonth("0"));     // Bad Number
console.log(convertMonth("13"));    // Bad Number
console.log(convertMonth("abc"));   // Bad Number

    
