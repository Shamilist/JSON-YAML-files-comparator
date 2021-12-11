#!/usr/bin/env node

const genDiff = require('../src/genDiff.js');
const fs = require('fs');
const path = require('path');
const process = require('process');
const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(fs.readFileSync(path.resolve( process.cwd(), filepath1)), fs.readFileSync(path.resolve( process.cwd(), filepath2))));
  })
  .parse();
