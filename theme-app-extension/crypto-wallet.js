import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

async function getWeb3Modal() {
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "995b087f3910499a829e5e460ca55e5c",
        },
      },
    },
  });
  return web3Modal;
}

/* invoke this function to prompt user and connect wallet */
async function connectWallet() {
  const web3Modal = await getWeb3Modal();
  const connection = await web3Modal.connect();
  const provider = new Web3Provider(connection);
  const accounts = await provider.listAccounts();
  console.log({ accounts });
}

const button = document.querySelector("#crypto-wallet-button");
button.addEventListener("click", connectWallet);
