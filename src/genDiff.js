import parse from './parsers.js';
import makeTree from './makeTree.js';
import formatter from './formatters/stylish.js';

const genDiff = (object1, object2, formater = 'stylish') => {
  const file1 = parse(object1);
  const file2 = parse(object2);

  const tree = makeTree(file1, file2);
  return formatter(tree, formater);
};

export default genDiff;
