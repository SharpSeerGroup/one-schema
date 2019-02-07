#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')

const [,, ...args] = process.argv

const version = require('../package.json').version

program
  .version(require('../package.json').version, '-v, --version')
  .option('-c, --config <configfile>', 'Use a specific config file')

program
  .command('list [directory]')
  .description('List files and folders')
  .option('-a, --all', 'List all files and folders')
  .option('-l --long', '')
  .action();


  // .usage('<command> [options]')

program.parse(process.argv)

console.log(`Hello World v${version} - ${args}`)

schema = require('../tests/coordinate.schema.json')

console.log(schema.id, schema.description)
