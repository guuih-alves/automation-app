import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
  Nome: Yup.string().required("Nome é obrigatório"),
  Codigo: Yup.number().required("Código é obrigatório").typeError('O valor deve ser numerico.'),
  Quantidade: Yup.number().required("Quantidade é obrigatório").typeError('O valor deve ser numerico.'),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "material");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Material adicionado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "material", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Material atualizado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };


  return (

    
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Nome: contact.Nome,
                  Codigo: contact.Codigo,
                  Quantidade: contact.Quantidade
                }
              : {
                  Nome: "",
                  Codigo: "",
                  Quantidade: ""
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Nome">Nome </label>
              <Field name="Nome" disabled={isUpdate} className="db h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Nome" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Codigo">Código</label>
              <Field name="Codigo" disabled={isUpdate} className="db h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Codigo" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Quantidade">Quantidade</label>
              <Field name="Quantidade" className="h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Quantidade" />
              </div>
            </div>



            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "Atualizar" : "Adicionar"} Material
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
