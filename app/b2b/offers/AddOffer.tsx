import { BASE_URL } from "@/app/utiils/urls";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import axios from "axios";
import B2BContext from "@/app/Context/b2bContext";
import { ToastBar, Toaster, toast } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    width: "20vw",
    borderRadius: "1rem",
  },
};

function AddOffer({ modalIsOpen, setIsOpen }: any) {
  const [user, setUser] = useState({ name: "", details: "", duration: "" });
  const { offers }: any = useContext(B2BContext);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Toaster />
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Add New Offer</h1>
        <AiOutlineClose
          onClick={closeModal}
          size={20}
          className="cursor-pointer"
        />
      </div>
      <div>
        <input
          type="text"
          value={user?.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          placeholder="Offer Name"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <input
          type="text"
          value={user?.details}
          onChange={(e) => {
            setUser({ ...user, details: e.target.value });
          }}
          placeholder="Details offering"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <input
          type="text"
          value={user?.duration}
          onChange={(e) => {
            setUser({ ...user, duration: e.target.value });
          }}
          placeholder="Class Duration"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <button
          className="greenButton block mx-auto mt-3"
          onClick={(e) => {
            if (!(!user?.name || !user?.details || !user?.duration)) {
              if (Number.isInteger(parseInt(user?.duration))) {
                axios
                  .post(`${BASE_URL}/offer/addOffer`, user)
                  .then((res: any) => {
                    console.log(res);
                    offers.getOffers();
                    setIsOpen(false);
                  })
                  .catch((err: any) => {
                    console.log(err);
                  });
              } else {
                toast.error("Class duration should be a number");
              }
            } else {
              toast.error("Please fill out all the fields");
            }
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}

export default AddOffer;
