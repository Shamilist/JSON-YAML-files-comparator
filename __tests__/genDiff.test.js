import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const fileName = fileURLToPath(import.meta.url); // путь до файла с тестами

const dirName = dirname(fileName); // путь до директории с тестами

const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename); // путь до файлов с фикстурами

const readFile = (filename) => fs.readFileSync((filename), 'utf-8'); // чтение файла

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');

const yamlFile1 = getFixturePath('file1.yaml');
const yamlFile2 = getFixturePath('file2.yaml');

test('genDiff with stylish formatter json files', () => {
  const resultFile = readFile(getFixturePath('expectedstylish_test.txt'));
  const makeGendiff = genDiff(jsonFile1, jsonFile2);
  expect(makeGendiff).toEqual(resultFile);
});

test('genDiff with stylish formatter yaml files', () => {
  const resultFile = readFile(getFixturePath('expectedstylish_test.txt'));
  const makeGendiff = genDiff(yamlFile1, yamlFile2);
  expect(makeGendiff).toEqual(resultFile);
});

test('genDiff with plain formatter yaml files', () => {
  const resultFile = readFile(getFixturePath('expectedPlain.txt'));
  const makeGendiff = genDiff(yamlFile1, yamlFile2, 'plain');
  expect(makeGendiff).toEqual(resultFile);
});

test('genDiff with plain formatter json files', () => {
  const resultFile = readFile(getFixturePath('expectedPlain.txt'));
  const makeGendiff = genDiff(jsonFile1, jsonFile2, 'plain');
  expect(makeGendiff).toEqual(resultFile);
});
