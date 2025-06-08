//Write a java script program to convert month number to month name using closures.
//If the user enters a number less than 1 or greater than 12 or a non-number, have the function write "Bad Number" in the monthName field.
//If the user enters a decimal between 1 and 12 (inclusive), strip the decimal portion of the number.

const getMonthNameConverter = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return function(monthInput) {
    const monthNumber = parseInt(monthInput, 10);
    return (monthNumber >= 1 && monthNumber <= 12) ? monthNames[monthNumber - 1] : "Bad Number";
  };
};

const convertMonth = getMonthNameConverter();

console.log(convertMonth("3"));
console.log(convertMonth("7.9"));
console.log(convertMonth("0"));
console.log(convertMonth("13"));
console.log(convertMonth("abc"));
    
