#!/usr/bin/env node

import * as fs from 'fs';
import path from 'path';
import process from 'process';
import program from 'commander';
import genDiff from '../src/genDiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const filepath1Path = path.resolve(process.cwd(), filepath1);
    const filepath2Path = path.resolve(process.cwd(), filepath2);
    console.log(genDiff(fs.readFileSync(filepath1Path), fs.readFileSync(filepath2Path)));
  })
  .parse();
