import _ from 'lodash';

const makeTree = (data1, data2) => {
  const commonKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const result = commonKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    switch (true) {
      case (!_.has(data1, key)):
        return { key, type: 'added', value: value2 };
      case (!_.has(data2, key)):
        return { key, type: 'deleted', value: value1 };
      case (_.isPlainObject(value1) && _.isPlainObject(value2)):
        return { key, type: 'hasChildren', children: makeTree(value1, value2) };
      case (!_.isEqual(value1, value2)):
        return {
          key, type: 'changed', beforeValue: value1, afterValue: value2,
        };
      case (_.isEqual(value1, value2)):
        return { key, type: 'unchanged', value: value1 };
      default:
        throw new Error('Error of formatted');
    }
  });
  return result;
};

export default makeTree;
