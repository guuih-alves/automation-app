import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
import { RxUpdate } from "react-icons/rx";
import { FaTools } from "react-icons/fa";


const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "material", id));
      toast.success("Material deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="ab flex items-center justify-between rounded-lg yellow p-2"
      >
        <div className=" flex gap-1">
          <FaTools className="text-4xl text-orange" />
          <div className="ml-5">
            <h2 className="font-medium">{contact.Nome}</h2>
            <p className="text-sm">Código: {contact.Codigo}</p>
            <p className="text-sm">Quantidade: {contact.Quantidade}</p>
            
          </div>
        </div>
        <div className="flex text-3xl">
          <RxUpdate onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};



export default ContactCard;