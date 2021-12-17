import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parsers = (file) => {
  const fileExtention = path.extname(file);
  const readFile = fs.readFileSync(file, 'utf-8');

  switch (true) {
    case fileExtention === '.json':
      return JSON.parse(readFile); // пробразую в строку

    case fileExtention === '.yml' || fileExtention === '.yaml':
      return yaml.load(readFile); // пробразую в строку

    default:
      return new Error(`Parsing a ${file} with '${fileExtention}' extention is not possibly`);
  }
};

export default parsers;
