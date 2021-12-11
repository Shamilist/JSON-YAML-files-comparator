const _ = require('lodash');

const genDiff = (object1 , object2) => {
    let resultObject = '';
    
    const jsonObj1 = JSON.parse(object1);
    const jsonObj2 = JSON.parse(object2);

    const commonKeys = (_.union(_.keys(jsonObj1), _.keys(jsonObj2))).sort();

    for (const name of commonKeys) {
        if (!_.has(jsonObj1, name)) { // если объект1 не содержит ключ - значит его добавили во второй
        resultObject = `${resultObject}
+ ${name}: ${jsonObj2[name]}`;
      } else if (!_.has(jsonObj2, name)) { // если объект2 не содержит ключ - значит его удалили во втором
        resultObject = `${resultObject}
- ${name}: ${jsonObj1[name]}`;
      } else if (jsonObj1[name] !== jsonObj2[name]) { // если свойства двух объектов с одинаковым ключом не равны - значит свойство поменяли
        resultObject = `${resultObject}
- ${name}: ${jsonObj1[name]}
+ ${name}: ${jsonObj2[name]}`;
      } else {
        resultObject = `${resultObject}
  ${name}: ${jsonObj1[name]}`; // объекты равны - значит ничего не меняли
      }
    }
    return  `{${resultObject}\n}`;
  };
  
  module.exports = genDiff;