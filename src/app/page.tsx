'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { Contract } from "ethers";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-row gap-1 ">
      <ConnectButton 
        label="Sign in" 
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }} 
      />
      
    </div>
  )
}
