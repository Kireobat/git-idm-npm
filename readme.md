# git-idm-npm

git-idm-npm is a command line interface based git identity manager.

## Table of contents

- [git-idm-npm](#git-idm-npm)
  - [Table of contents](#table-of-contents)
    - [Installation](#installation)
      - [Npm package (Recommended)](#npm-package-recommended)
      - [From github](#from-github)
      - [Manually](#manually)
    - [Troubleshooting](#troubleshooting)
        - ["scripts is disabled on this system"](#scripts-is-disabled-on-this-system)
    - [Commands](#commands)
      - [The help command](#the-help-command)
        - [`git-idm active`](#git-idm-active)
        - [`git-idm add`](#git-idm-add)
        - [`git-idm alias`](#git-idm-alias)
        - [`git-idm list`](#git-idm-list)
        - [`git-idm remove`](#git-idm-remove)
        - [`git-idm use`](#git-idm-use)

---

### Installation

#### Npm package (Recommended)

1. `npm install -g git-idm-npm`

#### From github

1. `npm install -g https://github.com/Kireobat/git-idm-npm.git`

#### Manually

1. Download the git repository
    - Either download it as a zip file and unzip it, or
    - run `git clone https://github.com/Kireobat/git-idm-npm.git`
2. Install it from the files you downloaded
   - run `npm install -g path/to/files`

---

### Troubleshooting

This script has been confirmed to work on:

- [x] Windows
  - [x] 10
  - [ ] 11
- [ ] Linux
- [ ] MacOS

##### "scripts is disabled on this system"

If you get the following error message:

```
git-idm : File C:\path\to\nodejs\git-idm.ps1 cannot be loaded because running scripts is disabled on this system.
For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ git-idm list
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

The solution is to follow the path spesified at the beginning of 
the error message `C:\path\to\nodejs\git-idm.ps1` and delete the following file: `git-idm.ps1`

---

### Commands

Commands are sorted alphabetically

#### The help command

`git-idm help`

or 

`git-idm <command> --help`

is availiable and provides more or less the same info as below.


##### `git-idm active`
  - displays the active git identity



##### `git-idm add`
  - adds a new git identity
  - arguments:
    - --name=""
      - alias: --n=""
      - required
      - string
    - --email=""
      - alias: --e=""
      - required
      - string
    - --alias=""
      - alias: --a=""
      - optional
      - string



##### `git-idm alias`
  - adds or changes an alias
  - arguments:
    - --alias=""
      - alias: --a=""
      - required
      - string
    - --name=""
      - alias: --n=""
      - required
      - string



##### `git-idm list`
  - lists every saved identity



##### `git-idm remove`
  - deletes a git identitiy
  - arguments:
    - --name=""
      - aliases: --n="" --a="" --alias=""
      - required
      - string



##### `git-idm use`
  - set git identity for current repository or globally
  - arguments:
    - --name=""
      - aliases: --n="" --a="" --alias=""
      - required
      - string
    - --global
      - alias: --g
      - optional
      - boolean
