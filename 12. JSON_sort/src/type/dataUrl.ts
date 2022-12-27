type TDataUrlOne = {
  firstName: string;
  location: {
    ipAddress: string;
    coordinates: {
      x: number;
      y: number;
    };
    country: string;
    zipCode: string;
    city: string;
    countryCode: string;
  };
  hobbies: string[];
  isDone: boolean;
  age: string;
  work: string;
};

type TDataUrlTwo = {
  firstName: string;
  lastName: string;
  higherEducation: {
    isDone: boolean;
    univercity: string;
  };
  hobbies: string[];
  phone: string;
  work: string;
  weight: string;
  location: {
    ipAddress: string;
    coordinates: {
      x: number;
      y: number;
    };
    country: string;
    zipCode: string;
    city: string;
    countryCode: string;
  };
  id: string;
  age: string;
  email: string;
  height: string;
};

type TDataUrlThree = {
  firstName: string;
  lastName: string;
  hobbies: string[];
  work: string;
  weight: string;
  location: {
    country: string;
    zipCode: string;
    city: string;
    countryCode: string;
    ipAddress: string;
    coordinates: {
      x: number;
      y: number;
    };
    isDone: boolean;
  };
  id: string;
  age: string;
  email: string;
  height: string;
};

export type TDataUrl = TDataUrlThree & TDataUrlTwo & TDataUrlOne;

// {
//   "firstName": "Layla",
//   "lastName": "Smit",
//   "hobbies": [
//     "singing",
//     "drawing"
//   ],
//   "work": "Chromaton",
//   "weight": "61 kg",
//   "location": {
//     "country": "Portugal",
//     "zipCode": "93689",
//     "city": "Durham",
//     "countryCode": "PT",
//     "ipAddress": "152.35.245.252",
//     "coordinates": {
//       "x": 34.03,
//       "y": 21.38
//     },
//     "isDone": false
//   },
//   "id": "id#05026b16-0c47-4698-844b-585e86f7b31a",
//   "age": "56",
//   "email": "layla.smit@tecomix.net",
//   "height": "153"
// }
