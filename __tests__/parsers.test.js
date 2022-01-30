// import * as path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import parsers from '../src/parsers.js';

// const fileName = fileURLToPath(import.meta.url); // путь до файла с тестами

// const dirName = dirname(fileName); // путь до директории с тестами

// const getFixturePath = (filename) => path.join(dirName, '..', '__fixtures__', filename); // путь до файлов с фикстурами

// test('parse to Json', () => {
//   const jsonFile = getFixturePath('file1.json');
//   const resultFile = {
//     common: {
//       setting1: 'Value 1',
//       setting2: 200,
//       setting3: true,
//       setting6: {
//         key: 'value',
//         doge: {
//           wow: '',
//         },
//       },
//     },
//     group1: {
//       baz: 'bas',
//       foo: 'bar',
//       nest: {
//         key: 'value',
//       },
//     },
//     group2: {
//       abc: 12345,
//       deep: {
//         id: 45,
//       },
//     },
//   };
//   expect(parsers(jsonFile)).toEqual(resultFile);
// });

// test('parse to Yaml', () => {
//   const yamlFile = getFixturePath('file1.yaml');
//   const resultFile = {
//     common: {
//       setting1: 'Value 1',
//       setting2: 200,
//       setting3: true,
//       setting6: { key: 'value', doge: { wow: '' } },
//     },
//     group1: { baz: 'bas', foo: 'bar', nest: { key: 'value' } },
//     group2: { abc: 12345, deep: { id: 45 } },
//   };
//   expect(parsers(yamlFile)).toEqual(resultFile);
// });
