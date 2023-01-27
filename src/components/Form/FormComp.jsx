import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const FormComp = ({ corfirmPurchase, formVisi, setFormVisi }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    corfirmPurchase(data)
  }; // your form submit function which will invoke after successful validation

  const handleClose = () => {
    setFormVisi(false)
  }

  return (
    <>

      <Modal
        show={formVisi}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>CheckOut</Modal.Title>
          </Modal.Header>
          <Modal.Body>



            <label>Nombre</label>
            <input {...register("nombre", { required: true, minLength: 2, })} />
            {errors?.nombre?.type === "required" && <p>Debe ingresar Nombre</p>}
            {errors?.nombre?.type === "minLength" && (<p>El nombre debe tener como minimo 2 caracteres.</p>)}


            <label>Email</label>
            <input type='email' {...register("email", { minLength: 3, required: true })} />
            {errors?.email?.type === "minLength" && (<p>El mail tiene que tener minimo 3 caracteres</p>)}
            {errors?.email?.type === "required" && <p>Debe ingresar Email</p>}

            <label>Telefono</label>
            <input type='number' {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
            {errors?.phone?.type === 'minLength' && (<p>El telefono debe tener 10 digitos</p>)}
            {errors?.phone?.type === "required" && <p>Debe ingresar telefono</p>}


          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">Confirmar</Button>
          </Modal.Footer>

        </form>
      </Modal>
    </>



  );
}

export default FormComp