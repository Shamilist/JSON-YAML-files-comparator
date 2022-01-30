import parse from './parsers.js';
import makeTree from './makeTree.js';
import formatter from './formatters/index.js';

const genDiff = (filePath1, filepath2, formater = 'stylish') => {
  const file1 = parse(filePath1);
  const file2 = parse(filepath2);

  const tree = makeTree(file1, file2);
  return formatter(tree, formater);
};

export default genDiff;
