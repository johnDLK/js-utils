import { deepClone } from '../index.js';

(function(){
  let abc = {
    a: 1,
    b: {
      bb: ['bb']
    },
    c: [
      'cc'
    ]
  };
  let ddd = deepClone(abc);
  if (abc.b.bb !== ddd.b.bb) {
    console.log('test done.');
  } else {
    console.log('test fail.');
  }
})()