# Get private key, public key & address from the seed phrase 👨‍💻

## Concept

- Import Wallet from ethers js library.

``` js
import { Wallet } from 'ethers';
```

- Wallet has a method "fromMnemonic" which accepts two variables:
  1. **seed phrase**
  2. **the BIP-32 derivation path** (Address path (BIP32) defines how to derive private and public keys of a wallet from a binary master seed (m) and an ordered set of indices.)

- If we don't provide the path, it defaults to `m/44'/60'/0'/0/0`, which points to the first account.
- Path for the second account is: `m/44'/60'/0'/0/1`

```js
const myWalletAccount = Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/0`);
```

- Now get the private key, public key & address

```js
let privateKey = myWalletAccount.privateKey;
let publicKey = myWalletAccount.publicKey;
let address = myWalletAccount.address;

console.log(`your account's private key is: ${privateKey}`);
console.log(`your account's public key is: ${publicKey}`);
console.log(`your account's address is: ${address}`);
```

---

## Set up the project 🚀

- Install the dependencies:

``` npm sh
npm i
```

- Create a file ".env"

``` sh
touch .env
```

- Create a variable SEED_PHRASE, and paste your seed phrase in it

``` js
SEED_PHRASE="PASTE YOUR SEED PHRASE HERE"
```

- Run the program

```js
npm run dev
```
