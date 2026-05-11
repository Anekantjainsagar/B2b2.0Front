import { BASE_URL } from "@/app/utiils/urls";
import React, { useContext, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import axios from "axios";
import B2BContext from "@/app/Context/b2bContext";
import { Toaster, toast } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    width: "45vw",
    borderRadius: "1rem",
  },
};

function ViewDatabase({ modalIsOpen, setIsOpen }: any) {
  const { login, dbs }: any = useContext(B2BContext);

  const [user, setUser] = useState({
    name: dbs?.clickedDb?.name,
    website: dbs?.clickedDb?.website,
    address: dbs?.clickedDb?.address,
    city: dbs?.clickedDb?.city,
    state: dbs?.clickedDb?.state,
    email: dbs?.clickedDb?.email,
    phone: dbs?.clickedDb?.phone,
    schoolLink: dbs?.clickedDb?.schoolLink,
    board: dbs?.clickedDb?.board,
    type: dbs?.clickedDb?.type,
    noOfStudents: "",
    schoolFee: "",
    category: "",
    principal: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
    trustee: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
    coordinator: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
  });

  useEffect(() => {
    setUser({
      name: dbs?.clickedDb?.name,
      website: dbs?.clickedDb?.website,
      address: dbs?.clickedDb?.address,
      city: dbs?.clickedDb?.city,
      state: dbs?.clickedDb?.state,
      email: dbs?.clickedDb?.email,
      phone: dbs?.clickedDb?.phone,
      schoolLink: dbs?.clickedDb?.schoolLink,
      board: dbs?.clickedDb?.board,
      type: dbs?.clickedDb?.type,
      noOfStudents: dbs?.clickedDb?.noOfStudents,
      schoolFee: dbs?.clickedDb?.scchoolFee,
      category: dbs?.clickedDb?.category,
      principal: {
        name: dbs?.clickedDb?.principal?.name,
        email: dbs?.clickedDb?.principal?.email,
        phone: dbs?.clickedDb?.principal?.phone,
        role: dbs?.clickedDb?.principal?.role,
      },
      trustee: {
        name: dbs?.clickedDb?.trustee?.name,
        email: dbs?.clickedDb?.trustee?.email,
        phone: dbs?.clickedDb?.trustee?.phone,
        role: dbs?.clickedDb?.trustee?.role,
      },
      coordinator: {
        name: dbs?.clickedDb?.coordinator?.name,
        email: dbs?.clickedDb?.coordinator?.email,
        phone: dbs?.clickedDb?.coordinator?.phone,
        role: dbs?.clickedDb?.coordinator?.role,
      },
    });
  }, [dbs?.clickedDb]);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">{dbs?.clickedDb?.name}</h1>
          <button
            className="w-fit bg-red-500 mx-auto px-5 py-0.5 rounded-xl"
            onClick={(e) => {
              axios
                .delete(`${BASE_URL}/db/deleteSchool/${dbs?.clickedDb?._id}`)
                .then((res: any) => {
                  setIsOpen(false);
                  dbs?.getSchools();
                })
                .catch((err: any) => {
                  console.log(err);
                });
            }}
          >
            Delete School
          </button>
          <AiOutlineClose
            onClick={closeModal}
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-3">
          <Input
            placeholder="Name *"
            state={user?.name}
            setState={(e: any) => setUser({ ...user, name: e.target.value })}
          />
          <Input
            placeholder="Website"
            state={user?.website}
            setState={(e: any) => setUser({ ...user, website: e.target.value })}
          />
          <Input
            placeholder="Address"
            state={user?.address}
            setState={(e: any) => setUser({ ...user, address: e.target.value })}
          />
          <Input
            placeholder="City"
            state={user?.city}
            setState={(e: any) => setUser({ ...user, city: e.target.value })}
          />
          <Input
            placeholder="State"
            state={user?.state}
            setState={(e: any) => setUser({ ...user, state: e.target.value })}
          />
          <Input
            placeholder="Email *"
            state={user?.email}
            setState={(e: any) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            placeholder="Phone *"
            state={user?.phone}
            setState={(e: any) => setUser({ ...user, phone: e.target.value })}
          />
          <Input
            placeholder="School Link"
            state={user?.schoolLink}
            setState={(e: any) =>
              setUser({ ...user, schoolLink: e.target.value })
            }
          />
          <Input
            placeholder="Board"
            state={user?.board}
            setState={(e: any) => setUser({ ...user, board: e.target.value })}
          />
          <Input
            placeholder="Type"
            state={user?.type}
            setState={(e: any) => setUser({ ...user, type: e.target.value })}
          />
          <Input
            placeholder="No of students"
            state={user?.noOfStudents}
            setState={(e: any) =>
              setUser({ ...user, noOfStudents: e.target.value })
            }
          />
          <Input
            placeholder="School Fee"
            state={user?.schoolFee}
            setState={(e: any) =>
              setUser({ ...user, schoolFee: e.target.value })
            }
          />
          <Input
            placeholder="Category"
            state={user?.category}
            setState={(e: any) =>
              setUser({ ...user, category: e.target.value })
            }
          />
        </div>
        <div className="grid grid-cols-4">
          <Input
            placeholder="Principal Name"
            state={user?.principal?.name}
            setState={(e: any) =>
              setUser({
                ...user,
                principal: { ...user?.principal, name: e.target.value },
              })
            }
          />
          <Input
            placeholder="Principal Email"
            state={user?.principal?.email}
            setState={(e: any) =>
              setUser({
                ...user,
                principal: { ...user?.principal, email: e.target.value },
              })
            }
          />
          <Input
            placeholder="Principal role"
            state={user?.principal?.role}
            setState={(e: any) =>
              setUser({
                ...user,
                principal: { ...user?.principal, role: e.target.value },
              })
            }
          />
          <Input
            placeholder="Principal Phone"
            state={user?.principal?.phone}
            setState={(e: any) =>
              setUser({
                ...user,
                principal: { ...user?.principal, phone: e.target.value },
              })
            }
          />
          <Input
            placeholder="Trustee Name"
            state={user?.trustee?.name}
            setState={(e: any) =>
              setUser({
                ...user,
                trustee: { ...user?.trustee, name: e.target.value },
              })
            }
          />
          <Input
            placeholder="Trustee Email"
            state={user?.trustee?.email}
            setState={(e: any) =>
              setUser({
                ...user,
                trustee: { ...user?.trustee, email: e.target.value },
              })
            }
          />
          <Input
            placeholder="Trustee role"
            state={user?.trustee?.role}
            setState={(e: any) =>
              setUser({
                ...user,
                trustee: { ...user?.trustee, role: e.target.value },
              })
            }
          />
          <Input
            placeholder="Trustee Phone"
            state={user?.trustee?.phone}
            setState={(e: any) =>
              setUser({
                ...user,
                trustee: { ...user?.trustee, phone: e.target.value },
              })
            }
          />
          <Input
            placeholder="Coordinator Name"
            state={user?.coordinator?.name}
            setState={(e: any) =>
              setUser({
                ...user,
                coordinator: { ...user?.coordinator, name: e.target.value },
              })
            }
          />
          <Input
            placeholder="Coordinator Email"
            state={user?.coordinator?.email}
            setState={(e: any) =>
              setUser({
                ...user,
                coordinator: { ...user?.coordinator, email: e.target.value },
              })
            }
          />
          <Input
            placeholder="Coordinator role"
            state={user?.coordinator?.role}
            setState={(e: any) =>
              setUser({
                ...user,
                coordinator: { ...user?.coordinator, role: e.target.value },
              })
            }
          />
          <Input
            placeholder="Coordinator Phone"
            state={user?.coordinator?.phone}
            setState={(e: any) =>
              setUser({
                ...user,
                coordinator: { ...user?.coordinator, phone: e.target.value },
              })
            }
          />
        </div>
        <button
          className="greenButton block mx-auto mt-3"
          onClick={(e) => {
            if (
              (user.name.length > 0 && user.phone.length > 0) ||
              (user.name.length > 0 && user.email.length > 0)
            ) {
              const updatedSchool = {
                ...user,
                id: dbs?.clickedDb?._id,
              };
              axios
                .put(`${BASE_URL}/db/updateSchool`, updatedSchool)
                .then((response: any) => {
                  setIsOpen(false);
                  dbs?.getSchools();
                })
                .catch((err: any) => {
                  console.log(err);
                });
            } else {
              toast.error("Please fill out all the compulsory fields");
            }
          }}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
}

const Input = ({ state, setState, placeholder }: any) => {
  return (
    <input
      type="text"
      value={state}
      onChange={setState}
      placeholder={placeholder}
      className="bg-inputGray outline-none w-[92%] mx-auto py-1 px-3 rounded-lg mt-3"
    />
  );
};

export default ViewDatabase;
