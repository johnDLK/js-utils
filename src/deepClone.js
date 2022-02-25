
const class2type = {};
'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(name => {
  class2type['[object ' + name + ']'] = name.toLowerCase();
});

const type = (obj) => {
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj;
}

const deepClone = (source, srcStack = [], distStack = []) => {
  if (source === null) { return null; }
  let target;
  switch (type(source)) {
    case 'object':
      target = Object.create(Object.getPrototypeOf(source));
      const keys = Object.keys(source);
      srcStack.push(source);
      distStack.push(target);
      keys.forEach(key => {
        const loopIdx = srcStack.lastIndexOf(source[key]);
        if (loopIdx > 0) {
          target[key] = distStack[loopIdx];
        } else {
          target[key] = deepClone(source[key], srcStack, distStack);
        }
      });
      break;
    case 'array':
      target = [];
      srcStack.push(source);
      distStack.push(target);
      source.forEach((item, index) => {
        const loopIdx = srcStack.lastIndexOf(item);
        if (loopIdx > 0) {
          target[index] = distStack[loopIdx];
        } else {
          target[index] = deepClone(item, srcStack, distStack);
        }
      });
      break;
    case 'date':
      target = new Date(source.valueOf());
      break;
    case 'regexp':
      const pattern = source.valueOf();
      let flags = '';
      flags += pattern.global ? 'g' : '';
      flags += pattern.ignoreCase ? 'i' : '';
      flags += pattern.multiline ? 'm' : '';
      target = new RegExp(pattern.source, flags);
      break;
    default: // boolean number string undefined
      target = source;
  }
  return target;
}


export default deepClone;