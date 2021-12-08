import _ from 'lodash';

const genDiff = (object1, object2) => {
    let resultObject = '';
  
    const commonKeys = _.union(_.keys(object1), _.keys(object2));

    console.log("!!!", commonKeys);
  
    for (const name of commonKeys) {
        if (!_.has(object1, name)) { // если объект1 не содержит ключ - значит его добавили во второй
        resultObject = `${resultObject}
+ ${name}: ${object2[name]}`;
      } else if (!_.has(object2, name)) { // если объект2 не содержит ключ - значит его удалили во втором
        resultObject = `${resultObject}
- ${name}: ${object1[name]}`;
      } else if (object1[name] !== object2[name]) { // если свойства двух объектов с одинаковым ключом не равны - значит свойство поменяли
        resultObject = `${resultObject}
- ${name}: ${object1[name]}
+ ${name}: ${object2[name]}`;
      } else {
        resultObject = `${resultObject}
  ${name}: ${object1[name]}`; // объекты равны - значит ничего не меняли
      }
    }
    return  `{${resultObject}\n}`;
  };
  
  export default genDiff;