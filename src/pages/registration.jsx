import React, { useState } from 'react'
// import { useWeb3ModalProvider } from "@web3modal/ethers/react";
// import { getProvider } from '../constants/Providers';
// import { getContract } from '../constants/contracts';
// import { toast } from 'react-toastify';
// import { ethers } from 'ethers';
// import {  useNavigate } from "react-router-dom";

const Resigtration = () => {
    //   const navigate= useNavigate();
    // const  {walletProvider} = useWeb3ModalProvider();
    const [files, setFiles] = useState()
    const [ensName, setEnsName] = useState('')

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();

    //     if (!files && !ensName) {
    //       return console.log("Please select an image or enter an ensName");
    //     } else {
    //       formData.append("file", files);

    //       const res = await fetch(
    //         "https://api.pinata.cloud/pinning/pinFileToIPFS",
    //         {
    //           method: "POST",
    //           headers: {
    //             Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
    //           },
    //           body: formData,
    //         }
    //       );

    //       const fileUrl = await res.json();

    //     //   const readWriteProvider = getProvider(walletProvider);
    //     //   const signer = await readWriteProvider.getSigner();

    //     //   const contract = getContract(signer);

    //       try {
    //         // const tx = await contract.registerNameService(
    //         //   ethers.encodeBytes32String(ensName),
    //         //   fileUrl.IpfsHash
    //         // );
    //         const receipt = await tx.wait();

    //         console.log("receipt: ", receipt);

    //         let notification;

    //         if (receipt.status) {
    //           notification = "Account created successfully";
    //         //   navigate("/Message")
    //         } else {
    //           return toast.error("Account creation failed");
    //         }

    //         console.log(notification);
    //       } catch (error) {
    //         console.log(error);

    //         let errorMessage;

    //         if (error.reason === "rejected") {
    //           errorMessage = "Transaction rejected";
    //         } else {
    //           console.log("Error", error);
    //         }

    //         return console.log(errorMessage);
    //       }
    //     }

    //     setEnsName("");
    //     setFiles();
    //   };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-[2rem] shadow dark:border-gray-700 dark:bg-gray-800 ">
                    <input
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        onChange={(e) => setFiles(e.target.files[0])}
                        hidden
                    />

                    <div className="mb-[2rem]">
                        <div className="relative ml-[auto] mr-[auto] h-20 w-20 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                            {files ? (
                                <img
                                    src={URL.createObjectURL(files)}
                                    className="h-full w-full rounded-lg object-cover"
                                    alt="Selected File"
                                />
                            ) : (
                                <label
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="file_input"
                                >
                                    <svg
                                        className="w-15 h-13 absolute -left-1 cursor-pointer text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </label>
                            )}
                        </div>
                        {files ? (
                            ''
                        ) : (
                            <p className="mt-[1rem] text-center">
                                Upload Image
                            </p>
                        )}
                    </div>

                    <form /*onSubmit={handleSubmit}*/>
                        <div>
                            <label
                                htmlFor="first_name"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                ENS Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                value={ensName}
                                onChange={(e) => setEnsName(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                placeholder="Holamite.eth"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-[1rem] w-full rounded-lg bg-black px-5 py-2.5 text-sm  font-medium text-white focus:outline-none focus:ring-4"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Resigtration
