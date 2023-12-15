#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import * as c from './commands.js'
import os from 'os';

const homedir = os.homedir();

export const gitIdentitesPath = homedir + '/.git-identities/identities.json';


const argv = yargs(hideBin(process.argv))
    .command(
        'list',
        'List all saved git identities', {},
        function () {
            c.listIdentities(gitIdentitesPath);
        }
    )
    .command(
        'add',
        'Add a new git identity', {
            name: {
                alias: 'n',
                describe: 'Name of the user',
                demandOption: true,
                type: 'string'
            },
            email: {
                alias: 'e',
                describe: 'Email of the user',
                demandOption: true,
                type: 'string'
            },
            alias: {
                alias: 'a',
                describe: 'Alias for the user',
                demandOption: false,
                type: 'string'
            }
        },
        function (argv) {
            c.addIdentity(argv.name, argv.email, argv.alias, gitIdentitesPath)
        }
    )
    .command(
        'alias',
        'create a short alias for a git identity', {
            name: {
                alias: 'n',
                describe: 'Name of the user',
                demandOption: true,
                type: 'string'
            },
            alias: {
                alias: 'a',
                describe: 'Alias for the user',
                demandOption: true,
                type: 'string'
            }
        },
        function (argv) {
            c.addAlias(argv.name, argv.alias, gitIdentitesPath)
        }
    )
    .command(
        'remove',
        'Remove a git identity', {
            name: {
                alias: 'n',
                describe: 'Name of the user',
                demandOption: true,
                type: 'string'
            }
        },
        function (argv) {
            c.removeIdentity(argv.name, gitIdentitesPath)
        }
    )
    .command(
        'use',
        'Set git identity for current repository', {
            name: {
                alias: 'n',
                describe: 'Name of the user',
                demandOption: true,
                type: 'string'
            }
        },
        function (argv) {
            c.useIdentity(argv.name, gitIdentitesPath)
        }
    )
    .help()
.argv;

