// import { User } from './User';
// import { Company } from './Company';

// instructions to every other class
// on how they can be an argument to 'addMarker' method
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map; // public is the default modifier, change to private so it cannot be accessed outside of class

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // add eventListener to marker
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!',
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  /* ==========================================================================
    before using a single method for adding markers
    - this example is using one method for User and one for Company
    ========================================================================== */

  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //     });
  //   }
}
