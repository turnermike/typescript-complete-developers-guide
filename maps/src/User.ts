import faker from 'faker'; // hold command key and hover over faker variable will link to type definition file
import { Mappable } from './CustomMap';

// use 'implements Mappable'
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // faker's type for latitude/longitude is string
      lng: parseFloat(faker.address.longitude()), // using parseFloat to conver to number as we've defined lat/lng as number
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
