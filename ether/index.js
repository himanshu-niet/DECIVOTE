const { ethers } = require("ethers");
require("dotenv").config();
const election = require("./contract/StateAssemblyElection.json");

const ABI = election.abi;
const privateKey = process.env.PRIVATE_KEY || "";
const RPC = process.env.RPC || "";
const contractAddress = process.env.CONTRACT_ADDRESS || "";

const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallet = new ethers.Wallet(privateKey, provider);
const signer = wallet.provider.getSigner(wallet.address);

export const write_contract = new ethers.Contract(contractAddress, ABI, wallet);
export const read_contract = new ethers.Contract(
  contractAddress,
  ABI,
  provider
);
