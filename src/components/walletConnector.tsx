"use client";

import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
  enhanceWalletWithAAConnector,
} from "@zerodevapp/wagmi/rainbowkit";

import {
  ConnectButton,
  RainbowKitProvider,
  connectorsForWallets,  
} from "@rainbow-me/rainbowkit";
import {
   metaMaskWallet,
   rainbowWallet,  
} from "@rainbow-me/rainbowkit/wallets";

import { polygonMumbai } from "wagmi/chains";
import { createClient, WagmiConfig, configureChains } from "wagmi";

import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

let projectId = "ddf26447-3e32-4129-8ae8-146806df5a76" || ""



function SocialWallet() {  

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({ options: { projectId } }),
        facebookWallet({ options: { projectId } }),
        githubWallet({ options: { projectId } }),
        discordWallet({ options: { projectId } }),
        twitchWallet({ options: { projectId } }),
        twitterWallet({ options: { projectId } })
    ],
    },

    // For Web3 wallets like MetaMask, you can use them as they are (as EOA), or "wrap" them with AA using enhanceWalletWithAAConnector,
    //  in which case the wallet will be used as the signer/owner for your AA wallet 
    /****************
     * In the context of enhancing a Web3 wallet like MetaMask with AA, it means "wrapping" the wallet with an AA connector. 
     * This process effectively transforms the wallet from an EOA to a contract-based account, allowing it to be used as the signer/owner for an AA wallet.
     * ********** */
    {
      groupName: 'EOA Wrapped with AA',
      wallets: [
        enhanceWalletWithAAConnector(
          metaMaskWallet({ chains }),
          { projectId }
        ),
      ],
    },
  ]);

  
  const client = createClient({
    autoConnect: false,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider        
        chains={chains}
        modalSize={"compact"}
      >
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default SocialWallet;
