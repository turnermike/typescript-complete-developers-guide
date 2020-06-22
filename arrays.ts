const carMakers1 = ['ford', 'toyota', 'chevy']; // initialized
const carMakers2: string[] = []; // not initialized
const dates = [new Date(), new Date()];

const carsByMake1 = [['f150'], ['corolla'], ['camaro']]; // initialized
const carsByMake2: string[][] = []; // not initialized

// Help with inference when extracing values
const car = carMakers1[0];
const myCar = carMakers1.pop();

// Prevent incompatible values
carMakers1.push(100);

// Help with 'map()'
carMakers1.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // error
