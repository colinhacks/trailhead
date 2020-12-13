<div align="center">
  <h1 align="center">Trailhead</h1>
  <p>A utility for generating typesafe paths through your data</p>
</div>

<br/>
<br/>

# Compatibility

Requires Typescript 4.0+ and the Proxy API. You can check browser compatibility for Proxies at [caniuse.com/proxy](https://caniuse.com/proxy).

# Usage

```ts
import { trailhead } from 'trailhead';

type Data = {
  firstName: string;
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

console.log(test); // => { __path: [] }
console.log(test.firstName); // => { __path: ["firstName"] }
console.log(test.array[5]); // => { __path: ["array", 5] }
console.log(test.arrayObject); // => { __path: ["arrayObject"] }
console.log(test.arrayObject[5]); // => { __path: ["arrayObject", 5, "firstName"] }
console.log(test.arrayObject[5].firstName); // => { __path: ["arrayObject", 5, "firstName"] }
```
