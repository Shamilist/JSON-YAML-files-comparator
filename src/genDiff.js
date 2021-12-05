import _ from 'lodash';

const path = require('path');

import * as fs from 'fs';

const genDiff = (object1, object2) => {
    const resultObject = {};
  
    const commonKeys = _.union(_.keys(object1), _.keys(object2));
  
    for (const name of commonKeys) {
      if (!_.has(object1, name)) { // если объект1 не содержит ключ - значит его добавили во второй
        resultObject[name] = 'added';
      } else if (!_.has(object2, name)) { // если объект2 не содержит ключ - значит его удалили во втором
        resultObject[name] = 'deleted';
      } else if (object1[name] !== object2[name]) { // если свойства двух объектов с одинаковым ключом не равны - значит свойство поменяли
        resultObject[name] = 'changed';
      } else {
        resultObject[name] = 'unchanged'; // объекты равны - значит ничего не меняли
      }
    }
    return resultObject;
  };
  
  export default genDiff;
