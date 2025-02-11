import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

let identities;

const loadFile = (filePath) => {
    const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
    const identitiesPath = path.join(dirPath, 'identities.json');

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(identitiesPath)) {
        fs.writeFileSync(identitiesPath, '[]');
    }

    const data = fs.readFileSync(identitiesPath, 'utf8');
    identities = JSON.parse(data);

    return identities;
}

let user = {
    name: '',
    email: ''
}

export const addIdentity = (name, email, alias, filePath) => {

    identities = loadFile(filePath);

    const identitiesPath = path.join(filePath, 'identities.json');

    user.name = name;
    user.email = email;

    if (alias) user.alias = alias;

    identities.push(user);

    fs.writeFile(identitiesPath, JSON.stringify(identities), (err) => {
        if (err) throw err;
        console.log('Identity written to file');
    });
};

export const listIdentities = (filePath) => {
    identities = loadFile(filePath);
    console.log(identities);
}



export const addAlias = (name, alias, filePath) => {

    const identitiesPath = path.join(filePath, 'identities.json');

    identities = loadFile(filePath);

    const index = identities.findIndex(identity => identity.name === name);

    if (index !== -1) {
        identities[index].alias = alias;
        fs.writeFile(identitiesPath, JSON.stringify(identities), (err) => {
            if (err) throw err;
            console.log('Alias added/changed for ' + name);
        });
    } else {
        console.log('Identity not found');
    }
}

export const removeIdentity = (name, filePath) => {

    const identitiesPath = path.join(filePath, 'identities.json');

    identities = loadFile(filePath);

    const index = identities.findIndex(identity => identity.name === name || identity.alias === name);

    if (index !== -1) {
        identities.splice(index, 1);
        fs.writeFile(identitiesPath, JSON.stringify(identities), (err) => {
            if (err) throw err;
            console.log('Identity removed');
        });
    } else {
        console.log('Identity not found');
    }
}

export const useIdentity = (name, filePath, global) => {
    const identitiesPath = path.join(filePath, 'identities.json');

    identities = loadFile(filePath);

    const index = identities.findIndex(identity => identity.name === name || identity.alias === name);

    if (index !== -1 && global) {
        console.log('git config --global user.name ' + '"' + identities[index].name + '"');
        execSync('git config --global user.name ' + '"' + identities[index].name + '"');

        console.log('git config --global user.email ' + identities[index].email);
        execSync('git config --global user.email ' + identities[index].email);
    } else if (index !== -1 && !global) {
        console.log('git config user.name ' + '"' + identities[index].name + '"');
        execSync('git config user.name ' + '"' + identities[index].name + '"');

        console.log('git config user.email ' + identities[index].email);
        execSync('git config user.email ' + identities[index].email);
    } else {
        console.log('Identity not found');
    }
}

export const activeIdentity = () => {
    user.name = execSync('git config --get user.name', { encoding: 'utf8' }).trim();
    user.email = execSync('git config --get user.email', { encoding: 'utf8' }).trim();

    console.log("Active identity: " + user.name + " <" + user.email + ">")
}