import _ from 'lodash';

// const path = require('path');

// import * as fs from 'fs';

const object1 = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const object2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};

const genDiff = (object1, object2) => {
    let resultObject = '';
  
    const commonKeys = _.union(_.keys(object1), _.keys(object2));

    console.log("!!!", commonKeys);
  
    for (const name of commonKeys) {
        if (!_.has(object1, name)) { // если объект1 не содержит ключ - значит его добавили во второй
        resultObject = `${resultObject}
+ ${object2.name}: ${object2.value}`;
      } else if (!_.has(object2, name)) { // если объект2 не содержит ключ - значит его удалили во втором
        resultObject = `${resultObject}
- ${object1.name}: ${object1.value}`;
      } else if (object1[name] !== object2[name]) { // если свойства двух объектов с одинаковым ключом не равны - значит свойство поменяли
        resultObject = `${resultObject}
- ${object1.key}: ${object2.value}
+ ${object2.key}: ${object2.value}`;
      } else {
        resultObject = `${resultObject}
  ${object1.name}: ${object1.value}`; // объекты равны - значит ничего не меняли
      }
    }
    return  `{${resultObject}\n}`;
  };
  
  export default genDiff;

  console.log(genDiff(object1, object2));