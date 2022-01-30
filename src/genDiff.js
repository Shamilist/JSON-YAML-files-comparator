import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import makeTree from './makeTree.js';
import formatter from './formatters/index.js';

const determineFormat = (filePath) => path.extname(filePath).slice(1);

const genDiff = (filePath1, filePath2, formater = 'stylish') => {
  const file1 = fs.readFileSync(filePath1);
  const file2 = fs.readFileSync(filePath2);

  const data1 = parse(file1, determineFormat(filePath1));
  const data2 = parse(file2, determineFormat(filePath2));

  const tree = makeTree(data1, data2);

  return formatter(tree, formater);
};

export default genDiff;
