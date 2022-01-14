import _ from 'lodash';
import parsers from './parsers.js';

const genDiff = (object1, object2) => {
  let resultObject = '';
  const jsonObj1 = parsers(object1);
  const jsonObj2 = parsers(object2);

  const commonKeys = (_.union(_.keys(jsonObj1), _.keys(jsonObj2))).sort();

  // eslint-disable-next-line no-restricted-syntax
  for (const name of commonKeys) {
    switch (true) {
      case (!_.has(jsonObj1, name)):
        resultObject = `${resultObject}
  + ${name}: ${jsonObj2[name]}`;
        break;
      case (!_.has(jsonObj2, name)):
        resultObject = `${resultObject}
  - ${name}: ${jsonObj1[name]}`;
        break;
      case (jsonObj1[name] !== jsonObj2[name]):
        resultObject = `${resultObject}
  - ${name}: ${jsonObj1[name]}
  + ${name}: ${jsonObj2[name]}`;
        break;
      case (jsonObj1[name] === jsonObj2[name]):
        resultObject = `${resultObject}
    ${name}: ${jsonObj1[name]}`;
        break;
      default:
        throw new Error('Error of formatted');
    }
  }
  return `{${resultObject}\n}`;
};

export default genDiff;
