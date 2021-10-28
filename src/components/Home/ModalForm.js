import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import "./Modal.css"
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: "rgb(123 119 155 / 75%)",
      }
};
Modal.setAppElement('#root');
const ModalForm = ({ modalIsOpen, closeModal,movie,schedule,time }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{textAlign: 'right'}}><button className="btn btn-primary mb-5 px-5 py-2" onClick={closeModal}>close</button></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-3" defaultValue={`movie - ${movie}`}{...register("example", { required: true })} readOnly/>
                    <input defaultValue={`schedule Date - ${schedule}`} {...register("exampleRequired", { required: true })} readOnly />
                    <input defaultValue={`schedule Time - ${time}`} {...register("exampleRequire", { required: true })} readOnly />
                    <input defaultValue="price $" {...register("exampleRequiredd", { required: true })} readOnly/>
                    {errors.exampleRequired && <p>This field is required</p>}
                    <div className="text-center">
                    <input className="btn btn-danger w-100 px-3" type="submit" id='ii' value="Check Out" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ModalForm;