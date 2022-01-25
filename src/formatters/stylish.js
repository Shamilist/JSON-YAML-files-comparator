import _ from 'lodash';

const makeIndent = (n) => ' '.repeat(n);

const indentSize = 2;
const baseIndent = 4;
const baseCloseIndent = 2;

const stringify = (data, level) => {
  if (!_.isPlainObject(data)) return data;

  const currentIndent = level + indentSize * baseIndent;
  const closeIndent = indentSize * baseCloseIndent;
  const lines = Object.entries(data)
    .map(([key, value]) => {
      if (_.isPlainObject(value)) {
        return `${makeIndent(currentIndent)}${key}: ${stringify(value, level + closeIndent)}`;
      }
      return `${makeIndent(currentIndent)}${key}: ${value}`;
    });
  return ['{', ...lines, `${makeIndent(level + closeIndent)}}`].join('\n');
};

export default (tree) => {
  const iter = (currenValue, level) => {
    const lines = currenValue.map(({
      key, type, value, beforeValue, afterValue, children,
    }) => {
      switch (type) {
        case 'added':
          return `${makeIndent(level + indentSize)}+ ${key}: ${stringify(value, level)}`;
        case 'deleted':
          return `${makeIndent(level + indentSize)}- ${key}: ${stringify(value, level)}`;
        case 'changed':
          return `${makeIndent(level + indentSize)}- ${key}: ${stringify(beforeValue, level)}\n${makeIndent(level + indentSize)}+ ${key}: ${stringify(afterValue, level)}`;
        case 'unchanged':
          return `${makeIndent(level + indentSize)}  ${key}: ${stringify(value, level)}`;
        case 'hasChildren':
          return `${makeIndent(level + indentSize)}  ${key}: ${iter(children, level + indentSize * 2)}`;
        default:
          throw new Error(`Wrong type ${type}`);
      }
    });
    return ['{', ...lines, `${makeIndent(level)}}`].join('\n');
  };
  return iter(tree, 0);
};
