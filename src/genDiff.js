import _ from 'lodash';

const genDiff = (object1, object2) => {
  let resultObject = '';

  const jsonObj1 = JSON.parse(object1);
  const jsonObj2 = JSON.parse(object2);

  const commonKeys = (_.union(_.keys(jsonObj1), _.keys(jsonObj2))).sort();

  // eslint-disable-next-line no-restricted-syntax
  for (const name of commonKeys) {
    if (!_.has(jsonObj1, name)) {
      resultObject = `${resultObject}
+ ${name}: ${jsonObj2[name]}`;
    } else if (!_.has(jsonObj2, name)) {
      resultObject = `${resultObject}
- ${name}: ${jsonObj1[name]}`;
    } else if (jsonObj1[name] !== jsonObj2[name]) {
      resultObject = `${resultObject}
- ${name}: ${jsonObj1[name]}
+ ${name}: ${jsonObj2[name]}`;
    } else {
      resultObject = `${resultObject}
  ${name}: ${jsonObj1[name]}`;
    }
  }
  return `{${resultObject}\n}`;
};

export default genDiff;
