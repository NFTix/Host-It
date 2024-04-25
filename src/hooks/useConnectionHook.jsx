import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Button } from "../components/ui/button";
import { configureWeb3Modal } from "../connection";

export default function ConnectButton() {
  configureWeb3Modal();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
 
 
 
  return (
    <>
      {isConnected ? (
        <w3m-button />
      ) : (
      
        <Button
          onClick={() => open()}
          variant={"outline"}
          className=" gap-3 px-6 py-1 rounded-2xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold lg:block md:block hidden"
          translate="no"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
