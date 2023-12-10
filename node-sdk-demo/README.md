#### Learning how to create 'npm packages'

- Create a new directory and move into it
``` sh
mkdir sdk-demo
cd sdk-demo
```

- create two directories:
  - '**package**' will have the package, 
  - and, '**testfolder**' is where we will test it.
``` sh
mkdir package testfolder
cd package
```

---

- we can use '**npm init -y**' to generate the basic package.json file, but it is **a good practice to have your package.json as much info as possible as you will be distibuting it**. So, try to use 'npm init'.
``` sh
npm init
touch index.js
```

- write contents in '**package/index.js**' file:
``` js
const isStringHustle = (str) => {
	return str === 'hustle';
};

// console.log(isStringHustle("deependu"))
// console.log(isStringHustle("Hustle"))
// console.log(isStringHustle("hustle"))

export default isStringHustle;

```

---

- Now we need to locally check it. But before that, we need to package it.
``` sh
npm link
```

- if you get the permission error, use:
``` sh
sudo npm link
```

---

- Now, the package is done, and we can install it in any other project in our device. To install it:
``` sh
npm link PROJECT_NAME
```

- Now import the package in you another project and test it.
  - write contents in '**testfolder/script.js**' file:
``` sh
import isStringHustle from '@deependu/my-first-package';

console.log(isStringHustle('deependu'));
console.log(isStringHustle('Hustle'));
console.log(isStringHustle('hustle'));
```

- Now run the testproject to check if its working.
---

## Publishing your node package
- You need to have an 'npm account' first. Go sign up and verify your account first it on [npm official website](https://www.npmjs.com/)
- Once you've signed up and have an account, login in your terminal using it.
``` sh
npm login
```
- To publish it, simply write:
``` sh
npm publish
```
- It will publish it on the 'npm' if the name of the package is normal. If it is using some sort of namespace like: **@deependu/somepackage**, it by default tries to make it private.
- So, in such situations, use:
``` sh
npm publish --access=public
```