import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { FaqUtil } from "./FaqUtil";

const FAQs = () => {
  return (
    <div className="container mx-auto lg:text-xl flex flex-col gap-10">
      <h1 className="lg:text-5xl text-2xl text-neutral-100">
        Frequently Asked{" "}
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
          Questions
        </span>
      </h1>
      <div className="flex flex-col gap-5 text-neutral-200">
        {FaqUtil.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="bg-gradient-to-r from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] p-[2px]">
                <div className="bg-[#000000de] p-5 flex flex-col gap-5">
                  <Disclosure.Button className="flex justify-between w-full">
                    <p>{item.question}</p>
                    {open ? (
                      <MinusIcon className="h-5 w-5" />
                    ) : (
                      <PlusIcon className="h-5 w-5" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel>{item.answer}</Disclosure.Panel>
                </div>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
