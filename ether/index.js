const { ethers } = require("ethers");
require("dotenv").config();
const election = require("./contract/StateAssemblyElection.json");

const ABI = election.abi;
const privateKey = `c265b017c3ed6ee66f61cf185cdcd9790d863757e2dde694151e8c9794423597`;
const RPC = "https://sepolia.infura.io/v3/422f644d481b414b8300595b414ddad3"
const contractAddress = "0x135D3Dde356CD550DeBC407E33a360779dAc47ef";

const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallet = new ethers.Wallet(privateKey, provider);
const signer = wallet.provider.getSigner(wallet.address);

export const write_contract = new ethers.Contract(contractAddress, ABI, wallet);
export const read_contract = new ethers.Contract(
  contractAddress,
  ABI,
  provider
);
