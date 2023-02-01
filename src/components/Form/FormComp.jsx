import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormComp = ({ corfirmPurchase, formVisi, setFormVisi }) => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    corfirmPurchase(data)
  };

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

            <label>Lastname</label>
            <input {...register("apellido", { required: true, minLength: 2, })} />
            {errors?.apellido?.type === "required" && <p>Enter lastname</p>}
            {errors?.apellido?.type === "minLength" && (<p>The name must have at least 2 characters.</p>)}

            <label>Email</label>
            <input type='email' {...register("elEmail", { minLength: 3, required: true })} />
            {errors?.elEmail?.type === "minLength" && (<p>The email must have a minimum of 3 characters.</p>)}
            {errors?.elEmail?.type === "required" && <p>You must enter Email.</p>}

            <label>Repeat e-mail</label>
            <input type='email' {...register("emailConfirm", {
              minLength: 3, required: true, validate: (value) => {
                const { elEmail } = getValues();
                return elEmail === value || "e-mail should match!";
              }
            })} />
            {errors?.emailConfirm?.type === "minLength" && (<p>The email must have a minimum of 3 characters.</p>)}
            {errors?.emailConfirm?.type === "required" && <p>You must enter Email.</p>}
            {errors?.emailConfirm?.type === "validate" && <p>e-mail should match!</p>}

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