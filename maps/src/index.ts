import {} from 'googlemaps';
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
// console.log(user);
const company = new Company();
// console.log(company);

// add markers
const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
// customMap.addMarker(user);
// customMap.addMarker(company);
