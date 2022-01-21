import _ from 'lodash';

const makeIndent = (n) => ' '.repeat(n); // повторить пробел нужное количество раз

const indentSize = 2; // что это за отступ?
const baseIndent = 4; // базовый отступ
const baseCloseIndent = 2; // что это за отступ?

const stringify = (data, depth) => { // что делает эта функция?
  if (!_.isPlainObject(data)) return data;

  const currentIndent = depth + indentSize * baseIndent; // что это?
  const closeIndent = indentSize * baseCloseIndent; // что это?
  const lines = Object.entries(data) // подсчет линий?
    .map(([key, value]) => {
      if (_.isPlainObject(value)) {
        return `${makeIndent(currentIndent)}${key}: ${stringify(value, depth + closeIndent)}`;
      }
      return `${makeIndent(currentIndent)}${key}: ${value}`;
    });
  return ['{', ...lines, `${makeIndent(depth + closeIndent)}},`].join('\n');
};

export default (tree) => { // что делает эта функция?
  const iter = (currenValue, depth) => {
    const lines = currenValue.map(({
      key, type, value, beforeValue, afterValue, children,
    }) => {
      switch (type) {
        case 'added':
          return `${makeIndent(depth + indentSize)}+ ${key}: ${stringify(value, depth)}`;
        case 'deleted':
          return `${makeIndent(depth + indentSize)}- ${key}: ${stringify(value, depth)}`;
        case 'changed':
          return `${makeIndent(depth + indentSize)}- ${key}: ${stringify(beforeValue, depth)}
          ${makeIndent(depth + indentSize)}+ ${key}: ${stringify(afterValue, depth)}`;
        case 'unchanged':
          return `${makeIndent(depth + indentSize)}  ${key}: ${stringify(value, depth)}`;
        case 'hasChildren':
          return `${makeIndent(depth + indentSize)}  ${key}: ${iter(children, depth + indentSize * 2)}`;
        default:
          throw new Error(`Wrong type ${type}`);
      }
    });
    return ['{', ...lines, `${makeIndent(depth)}}`].join('\n');
  };
  return iter(tree, 0);
};
