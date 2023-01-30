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

            <label>Name</label>
            <input {...register("nombre", { required: true, minLength: 2, })} />
            {errors?.nombre?.type === "required" && <p>Enter name</p>}
            {errors?.nombre?.type === "minLength" && (<p>The name must have at least 2 characters.</p>)}


            <label>Email</label>
            <input type='email' {...register("email", { minLength: 3, required: true })} />
            {errors?.email?.type === "minLength" && (<p>The email must have a minimum of 3 characters.</p>)}
            {errors?.email?.type === "required" && <p>You must enter Email.</p>}

            <label>Phone</label>
            <input type='number' {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
            {errors?.phone?.type === 'minLength' && (<p>The phone number  cannot be less than 10 digits.</p>)}
            {errors?.phone?.type === 'maxLength' && (<p>The phone number cannot be more than 10 digits.</p>)}
            {errors?.phone?.type === "required" && <p>You must enter phone number.</p>}


          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">Cofirm</Button>
          </Modal.Footer>

        </form>
      </Modal>
    </>



  );
}

export default FormComp