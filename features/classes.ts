class Vehicle {
  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log('hooonnnkkkkk...');
  }
}

// instance of Vehicle class (note lowercase naming of the instance and uppercase for class)
const vehicle = new Vehicle('orange'); // calls constructor and passes argument
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

// inheritance example
class Car extends Vehicle {
  // when the child class doesn't have a constructor, the parent (Vehicle) constructor would be called

  constructor(public wheels: number, color: string) {
    // did not use 'public' on color becuase parent has it
    super(color); // reference to constructor() method in parent, needs same arguments
  }

  private drive(): void {
    // overriding 'drive' method on child class 'Car' because it extends vehicle
    console.log('vroooommmm');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
// car.honk();
