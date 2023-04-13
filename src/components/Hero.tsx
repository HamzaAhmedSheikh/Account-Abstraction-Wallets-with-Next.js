"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo-500 md:text-5xl lg:text-6xl dark:text-white">
           
            Account Abstraction Task
          </h1>
          <p className="mb-8 text-lg font-normal text-indigo-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Concepts, Transactions, Mint NFTs and SocialWallets
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
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
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mb-5">
            <div className="block container p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               
                Account Creation & Transaction
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Transfer ETH
                <Link href="" target="_blank">
                 
                  transaction link.
                </Link>
              </p>
            </div>

            <div className="block container p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">               
                Mint NFT
              </h5>

              <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900"> My address: 0x17219A43Be0d83523e12159B0AaaF2FAE7044b92 </h6>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Send gasless transactions               
              </p>
              <p className="text-[#1e6bb8] text-lg font-normal hover:cursor-pointer no-underline"> 
                <Link
                  href="https://mumbai.polygonscan.com/tx/0x140e30f4f5ca806642ac4a1ce4f3f900b9e3ce9b481bb14449653c177a0d6e55"
                  target="_blank"
                >                 
                  transaction link.
                </Link>
                </p>

              <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                Bundle transactions with AA
              
              </p>
              <p className="text-[#1e6bb8] font-normal hover:cursor-pointer no-underline"> 
                <Link
                  href="https://mumbai.polygonscan.com/tx/0x17170eec85e7b6352cf153924fe2eff76907d30bdd7db9d059f85f5ad78bee5f"
                  target="_blank"
                  
                >                 
                  transaction link.
                </Link></p> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
