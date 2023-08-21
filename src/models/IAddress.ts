type AddressGeo = {
  "lat": string;
  "lng": string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
}