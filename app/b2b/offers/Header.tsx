"use client";
import B2BContext from "@/app/Context/b2bContext";
import React, { useContext, useState } from "react";
import AddOffer from "./AddOffer";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { offers }: any = useContext(B2BContext);

  return (
    <>
      <AddOffer modalIsOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      <div className="flex justify-between items-center mt-[1vw]">
        <h1 className="font-bold text-2xl">Offers</h1>
        <div className="flex items-center justify-between w-[25%]">
          <input
            type="text"
            placeholder="Search Offer by Name"
            value={offers?.offerConfig?.name}
            onChange={(e) => {
              offers.setOfferConfig({
                ...offers?.offerConfig,
                name: e.target.value,
              });
            }}
            autoFocus
            className="outline-none w-[50%] bg-inputGray px-3 py-1 rounded-xl text-center tracking-wider"
          />
          <button
            className="greenButton"
            onClick={(e) => {
              setModalIsOpen(!modalIsOpen);
            }}
          >
            Add New
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
