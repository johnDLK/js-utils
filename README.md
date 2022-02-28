# js-utils
javascript tools collection



### Installation
```bash
$ npm install @john_dlk/js-utils
```

### Description
* **deepClone**
  Deep copy, supports all types of javascript, and can copy circular references. Since a completely new data is generated, the performance is very poor. Please use it with caution if the amount of data is large.

### Usage
```javascript
import { deepClone } from '@john_dlk/js-utils';

let oneli = {
  mie: [1],
};
let twoli = Object.assign({}, oneli);
let duoli = deepClone(oneli);
twoli.mie.push(2);
duoli.mie.push(3);

console.log('oneli', oneli);
console.log('twoli', twoli);
console.log('duoli', duoli);
```