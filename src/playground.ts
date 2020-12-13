import { trailhead } from '.';

type Data = {
  firstName: string;
  lastName: string;
  nest: {
    firstName: string;
    lastName: string;
    deep: {
      firstName: string;
      lastName: string;
    };
  };
  array: string[];
  arrayObject: {
    firstName: string;
    lastName: string;
  }[];
  arrayObjectDeep: {
    firstName: string;
    lastName: string;
    deeper: string[];
  }[];
};

const test = trailhead<Data>();

console.log(test);
// => { __path: ["test"] }

console.log(test.arrayObject);
// => { __path: ["arrayObject"] }

console.log(test.arrayObject[5]);
// => { __path: ["arrayObject", 5, "firstName"] }

console.log(test.arrayObject[5].firstName);
// => { __path: ["arrayObject", 5, "firstName"] }
