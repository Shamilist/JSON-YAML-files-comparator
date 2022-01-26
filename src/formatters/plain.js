import _ from 'lodash';

const stringify = (data) => {
  if (_.isPlainObject(data)) return '[complex value]';
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

export default (tree) => {
  const iter = (currenValue, level) => currenValue.filter(({ type }) => type !== 'unchanged')
    .map(({
      key, type, value, beforeValue, afterValue, children,
    }) => {
      const keys = [...level, key];
      const commonName = keys.join('.');

      switch (type) {
        case 'added':
          return `Property '${commonName}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${commonName}' was removed`;
        case 'changed':
          return `Property '${commonName}' was updated. From ${stringify(beforeValue)} to ${stringify(afterValue)}`;
        case 'hasChildren':
          return `${iter(children, keys)}`;
        default:
          throw new Error(`Wrong type ${type}`);
      }
    }).join('\n');
  return iter(tree, []);
};
