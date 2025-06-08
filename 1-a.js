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
    