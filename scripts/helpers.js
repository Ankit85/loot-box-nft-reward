import {ThirdwebSDK} from "@3rdweb/sdk";
import {ethers} from "ethers";
import  dotenv from "dotenv";
import { exit } from "process";
import exp from "constants";


dotenv.config();


const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
console.log(walletPrivateKey);

//checking if the wallet private key is missing 
if(!walletPrivateKey) {
    console.error("Wallet Private Key is Missing!!:(");
    process.exit(1);
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY,
        ethers.getDefaultProvider("https://winter-icy-sun.matic-testnet.quiknode.pro/f36aa318f8f806e4e15a58ab4a1b6cb9f9e9d9b9/")
        ),
);

const appAddress = '0x9cacd9e8B6B866B030BE4195B423271c1315c476';
export async function getApp() {
    const thirdwebAppModule = await sdk.getAppModule(appAddress);
    return thirdwebAppModule;
  }


