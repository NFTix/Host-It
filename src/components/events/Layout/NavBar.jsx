import React from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowCircleDown, Microphone2, SearchNormal, TriangleLogo } from "iconsax-react";
import ConnectButton from "../../../hooks/useConnectionHook";

const NavBar = ({ idPage }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="hidden mt-3 mdl:flex justify-between sticky border-b border-lightWhite pb-1">
                <div className="flex items-center">
                    <div className="relative flex items-center bg-lightBlack ml-5 rounded-full w-80">
                        <input
                            type="text"
                            style={{ backgroundColor: "transparent" }}
                            className="flex-1 bg-transparent text-white rounded-full h-12 px-12 text-opacity-60 text-base font-normal leading-none font-mono"
                            placeholder="Search for channels"
                        />
                        <div className="absolute inset-y-0 left-2 flex items-center pl-3">
                            <SearchNormal
                                size="20"
                                className="text-white"
                            />
                        </div>
                    </div>
                    <div className="ml-6 rounded-full p-3 bg-lightBlack hover:bg-lightWhite">
                        <Microphone2 size="20" className="text-white" />
                    </div>
                </div>

                <div className="mr-10 flex items-center gap-6">
                    <ConnectButton />
                </div>
            </div>
            {!idPage && <div className="flex justify-between items-center px-8 py-4 w-screen mdl:hidden">
                <TriangleLogo size="36" className="text-white mdl:hidden" />
                <TriangleLogo size="60" className="text-white hidden mdl:flex" />

                <div className="flex justify-between items-center gap-2">
                    <div className="rounded-full">
                    <ConnectButton />
                    </div>
                </div>
            </div>}
            {idPage &&
                <div className="absolute left-4 top-4 p-2 rounded-full bg-lightBlack mdl:hidden z-40" onClick={goBack}>
                    <ArrowCircleDown size="32" className="text-white" onClick={goBack} />
                </div>}
        </>
    );
};

export default NavBar;
