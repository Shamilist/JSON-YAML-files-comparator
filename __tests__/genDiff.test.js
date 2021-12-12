import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const fileName = fileURLToPath(import.meta.url); // путь до файла с тестами

const dirName = dirname(fileName); // путь до директории с тестами

const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename); // путь до файлов с фикстурами

const readFile = (filename) => fs.readFileSync((filename), 'utf-8'); // чтение файла

test('genDiff json files', () => {
  const file1 = readFile(getFixturePath('file1.json'));
  const file2 = readFile(getFixturePath('file2.json'));
  const resultFile = readFile(getFixturePath('expected_file.txt'));
  expect(genDiff(file1, file2)).toEqual(resultFile);
});
