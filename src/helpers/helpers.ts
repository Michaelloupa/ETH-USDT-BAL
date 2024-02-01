// Import ethers library
import {Contract, JsonRpcProvider, formatEther, formatUnits, parseUnits} from 'ethers';
import { Config } from '../config/config';
import { ethers } from 'ethers';

// Connect to the Ethereum network
const provider = new JsonRpcProvider(Config.JSON_RPC);


const usdtContract = new Contract(Config.USDT_CONTRACT, Config.USDT_ABI, provider)

//get usdt balance

export const getusdtBalance = async(address:string)=>{
    try {
       
        const balance = await usdtContract.balanceOf(usdtContract);
        // Convert the balance from smallest unit to USDT (assuming 6 decimals for USDT)
        // const balanceInUsdt = parseUnits(balance);
        console.log(`USDT Balance: ${balance}`);

        
    } catch (error) {
        console.log("unable to get balance")
        
    }
}

//Get the eth Balance

export const getEthBalance = async(address:string)=>{
    try {
    const addressObj = {"address": "0xfb99555348bCCedEBB175Ef2D6b895Eb1F6914EC"}  
    const address = addressObj.address; 
    const balance = await provider.getBalance(address);
    // Convert the balance from wei to ether
    const balanceInEth = formatEther(balance);
    console.log(`ETH Balance: ${balanceInEth}`);
    return balanceInEth;

        
    } catch (error) {
        console.log("unable to get eth balance",error)
        
    }
}