# Node & Express with typescript 🚀🔥

- Create a package.json file:

``` sh
mkdir node-express-typescript
cd node-express-typescript/
npm init --yes
```

- install express & dotenv:

``` sh
npm install express dotenv
```

## Installing typescript

- We’ll start by installing TypeScript as a dev dependency. Along with it, we’ll install the the @types declaration packages for Express and Node.js, which provide type definitions in the form of declaration files.

- Declaration files are predefined modules that describe the shape of JavaScript values, or the types present, for the TypeScript compiler. Type declarations are usually contained in files with a **.d.ts** extension. These declaration files are available for all libraries that were originally written in JavaScript, not TypeScript.

```sh
npm i -D typescript @types/express @types/node
```

The **-D** flag, also known as the **--dev flag**, is a specification for the package manager to install these libraries as **devDependencies**.

## Generating tsconfig.json

The tsconfig.json file provides these default options and also provides us with the ability to tweak or customize the compiler options.

``` sh
npx tsc --init
```

If you open the tsconfig.json file, you’ll see a lot of other compiler options that are commented out. In tsconfig.json, compilerOptions is a mandatory field that needs to be specified. The options used in the config above are:

1. **target**: Allows us to specify the target JavaScript version that the compiler will output

2. **module**: Allows us to use a module manager in the compiled JavaScript code. CommonJS is supported and is a standard in Node.js

3. **strict**: An option that enables strict type-checking options
4. **esModuleInterop**: Allows us to compile ES6 modules to CommonJS modules
5. **skipLibCheck**: If set to true, skips type-checking of default library declaration files

6. **forceConsistentCasingInFileNames**: When set to true, enables case sensitive file naming

One option that you will have to enable is called **outDir**, which **specifies where the output will be located after the compilation step**. You can **search for this option in the tsconfig.json file and uncomment it**.

- **By default, the value of this option is set to the root directory. Change it to dist**:

```js
{
  "compilerOptions": {
    "outDir": "./dist"

    // rest options remain same
  }
}
```

## Create an express server with a .ts extension

- create a server.ts file

```sh
touch server.ts
```

- Copy below content into the server.ts file

```ts
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
```

## Watching file changes and build directory

We will install **nodemon** & **concurrently**. 'Concurrently' allows us to run multiple commands like nodemone to watch file changes and the tsc command to compile the code:

```sh
npm install -D concurrently nodemon
```

## Update the scripts in package.json

``` json
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/server.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/server.js\""
  }
}
```

- The build command will compile the code in JavaScript inside a dist directory.****
- The dev command is used to run the Node.js server in development mode.

### Run the project

``` sh
# for development
npm run dev

# for production
npm run build
npm run start
```
