# git-idm-npm

git-idm-npm is a command line interface based git identity manager.

## Table of contents

- [git-idm-npm](#git-idm-npm)
  - [Table of contents](#table-of-contents)
    - [Installation](#installation)
      - [Npm package](#npm-package)
      - [From github](#from-github)
      - [Manually](#manually)
    - [Commands {#commands}](#commands-commands)
        - [`git-idm list`](#git-idm-list)
        - [`git-idm add`](#git-idm-add)
        - [`git-idm alias`](#git-idm-alias)
        - [`git-idm remove`](#git-idm-remove)
        - [`git-idm use`](#git-idm-use)

### Installation

The easiest is installing from npm

#### Npm package

1. `npm install -g git-idm-npm`

#### From github

1. `npm install -g https://github.com/Kireobat/git-idm-npm.git`

#### Manually

1. Download the git repository
    - Either download it as a zip file and unzip it, or
    - run `git clone https://github.com/Kireobat/git-idm-npm.git`
2. Install it from the files you downloaded
   - run `npm install -g path/to/files`

### Commands {#commands}

##### `git-idm list`
  - lists every saved identity



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



##### `git-idm remove`
  - deletes a git identitiy
  - arguments:
    - --name=""
      - alias: --n=""
      - required
      - string



##### `git-idm use`
  - set git identity globaly
  - arguments:
    - --name=""
      - alias: --n=""
      - required
      - string