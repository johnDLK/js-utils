# js-utils
javascript tools collection



### Installation
```bash
$ npm install @john_dlk/js-utils
```

### Usage
```javascript
import { deepClone } from '@john_dlk/js-utils';

let oneli = {
  mie: [1]
};
let twoli = Object.assign({}, oneli);
let duoli = deepClone(oneli);
twoli.mie.push(2);
duoli.mie.push(3);

console.log('oneli', oneli);
console.log('twoli', twoli);
console.log('duoli', duoli);
```