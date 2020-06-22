const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  // method inside object, es2015
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring example
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
