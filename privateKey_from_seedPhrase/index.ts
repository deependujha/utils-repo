import 'dotenv/config';
import { Wallet } from 'ethers';

let seedPhrase = process.env.SEED_PHRASE || ''; // write your seed phrase here

const firstAccount = Wallet.fromMnemonic(seedPhrase);

let privateKey = firstAccount.privateKey;
let publicKey = firstAccount.publicKey;
let address = firstAccount.address;

console.log(`your first account private key is: ${privateKey}`);
console.log(`your first account public key is: ${publicKey}`);
console.log(`your first account address is: ${address}`);

console.log("================================================");

const secondAccount = Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/1`);

privateKey = secondAccount.privateKey;
publicKey = secondAccount.publicKey;
address = secondAccount.address;

console.log(`your second account private key is: ${privateKey}`);
console.log(`your second account public key is: ${publicKey}`);
console.log(`your second account address is: ${address}`);
