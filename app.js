exports.findAverage = (...numbers) => {
  
    if(numbers.length < 1) {
      throw new Error("This function expects at least one argument");
    }
    if(!numbers.every((element) => Number.isInteger(element))) {
      throw new Errow("The function expects an integer");
    }
    
    const average = numbers.reduce((a,b) => a + b, 0) / numbers.length;
    
    return Number.isInteger(average) ? average : parseFloat(average.toFixed(2));
}
