import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private _addresses = new BehaviorSubject<any>([]);

  get addresses() {
    return this._addresses.asObservable();
  }

  constructor() { }

  async addAddress(formData: any) {
    try {
      let addresses = this._addresses.value;
      if(addresses?.length == 0) {
        formData = { ...formData, primary: true };
      }

      const address = {
        ...formData,
        id: '1'
      };
      addresses = addresses.concat(address);
      this._addresses.next(addresses);
      return address;
    } catch(e) {
      throw(e);
    }
  }

  async getAddresses() {
    const dummyData = [
      { pincode: '12345', address: '123 Calle', house_no: 'A-101', city: 'Bogota', state: 'Bogota', country: 'COL', save_as: 'Home', landmark: 'Norte', primary: false },
      { pincode: '54321', address: '456 Calle', house_no: 'B-202', city: 'Bogota', state: 'CBogota', country: 'COL', save_as: 'Work', landmark: 'Norte', primary: true },
      { pincode: '67890', address: '789 Calle', house_no: 'C-303', city: 'Bogota', state: 'Bogota', country: 'COL', save_as: 'Other', landmark: 'Sur', primary: false }
    ];
    this._addresses.next(dummyData);
    return dummyData;
  }

}
