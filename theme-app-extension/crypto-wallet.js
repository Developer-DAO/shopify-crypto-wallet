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
  if (accounts.length === 0) return;

  const discountForAccount = await getDiscountCodeForAccount(accounts);
  if (!discountForAccount) return;
  alert("Discount has been applied!");
  window.location.href = `/discount/${discountForAccount}`; // this will apply the discount
}

async function getDiscountCodeForAccount(accounts) {
  // TODO: check if account is eligible for discount on the backend
  // Generate one time unique discount code using https://shopify.dev/api/admin-rest/2021-07/resources/discountcode#[post]/admin/api/2021-07/price_rules/%7Bprice_rule_id%7D/discount_codes.json
  return "pepe";
}

const button = document.querySelector("#crypto-wallet-button");
button.addEventListener("click", connectWallet);
