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

function AddAgent({ modalIsOpen, setIsOpen }: any) {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const { agents }: any = useContext(B2BContext);
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
        <h1 className="font-semibold text-xl">Add New Agent</h1>
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
          placeholder="Name"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <input
          type="text"
          value={user?.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="Email"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <input
          type="text"
          value={user?.phone}
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
          }}
          placeholder="Mobile/Password"
          className="bg-inputGray outline-none w-full py-1 px-3 rounded-lg mt-3"
        />
        <button
          className="greenButton block mx-auto mt-3"
          onClick={(e) => {
            if (!(!user?.name || !user?.email || !user?.phone)) {
              if (Number.isInteger(parseInt(user?.phone))) {
                axios
                  .post(`${BASE_URL}/agent/addAgent`, user)
                  .then((res: any) => {
                    console.log(res);
                    agents.getAgents();
                    setIsOpen(false);
                  })
                  .catch((err: any) => {
                    console.log(err);
                  });
              } else {
                toast.error("Phone should be number");
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

export default AddAgent;
