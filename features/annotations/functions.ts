// add = (a: number, b: number) - annotate function arguments
// : number => { - annotate return value

const add = (a: number, b: number): number => {
  // const add = (a: number, b: number) => {
  return a + b;
};

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonoymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void = no return
// may return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// never = never going to reach the end of the function
// used when we expect a function to never return data
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring with annotatios

// without destructuring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log('forecast.date', forecast.date);
//   console.log('forecast.weather', forecast.weather);
// };

// with destructuring
const logWeather = ({
  date, // arguments
  weather,
}: {
  date: Date; // annotations
  weather: string;
}): void => {
  console.log('date', date);
  console.log('weather', weather);
};

// // ES2015
// const logWeather = ({ date, weather }) => {
//   console.log('date', date);
//   console.log('weather', weather);
// };

logWeather(todaysWeather);
