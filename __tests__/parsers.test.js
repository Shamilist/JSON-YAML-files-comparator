import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import parsers from '../src/parsers.js';

const fileName = fileURLToPath(import.meta.url); // путь до файла с тестами

const dirName = dirname(fileName); // путь до директории с тестами

const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename); // путь до файлов с фикстурами

test('parse to Json', () => {
  const jsonFile = getFixturePath('file1.json');
  const resultFile = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  expect(parsers(jsonFile)).toEqual(resultFile);
});

test('parse to Yaml', () => {
  const yamlFile = getFixturePath('file1.yaml');
  const resultFile = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  expect(parsers(yamlFile)).toEqual(resultFile);
});
