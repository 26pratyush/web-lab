//Write a function translate() that will translate a text i.e, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".

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
    
