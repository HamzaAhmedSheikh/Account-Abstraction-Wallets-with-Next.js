"use client";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
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
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

// YOUR ZERODEV PROJECT ID
const projectId = "ddf26447-3e32-4129-8ae8-146806df5a76";

const connectors = connectorsForWallets([
  {
    groupName: "Social",
    wallets: [
      googleWallet({ options: { projectId } }),
      facebookWallet({ options: { projectId } }),
      githubWallet({ options: { projectId } }),
      discordWallet({ options: { projectId } }),
      twitchWallet({ options: { projectId } }),
      twitterWallet({ options: { projectId } }),
    ],
  },
  {
    groupName: "Web3 Wallets (AA-enabled)",
    wallets: [
      enhanceWalletWithAAConnector(metaMaskWallet({ chains }), { projectId }),
    ],
  },
  {
    groupName: "EOA",
    wallets: [rainbowWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} coolMode>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
