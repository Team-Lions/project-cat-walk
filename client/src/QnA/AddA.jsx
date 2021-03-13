import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddA(props) {
    const [show, setShow] = useState(false);
    const [body, setBody] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [product_id, setProduct_id] = useState(null);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
      e.preventDefault();
      let ansData = {
        body,
        name,
        email,
        question_id: props.question.question_id
      };
      props.sendAnswer(e, ansData, props.question.question_id);
    }


    const mystyle = {
      padding: "20",
      backgroundColor: "rgb(29, 18, 47)",
      border: "1px solid deepPink"
    }

    return (
      <>
        <Button onClick={handleShow} style={mystyle}>
            Add Answer +
        </Button>

        <Modal show={show} onHide={handleClose} style={{color:"black"}}>
          <Modal.Header closeButton>
            <Modal.Title >{props.product}: {props.question.question_body}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label style={{color:"deeppink"}}>Your nickname</Form.Label>
                    <Form.Control type="text" placeholder="Enter nickname" onChange={(e) => {
                      setName(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{color:"deeppink"}}>Your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                      setEmail(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{color:"deeppink"}}>Your answer</Form.Label>
                    <Form.Control type="text" placeholder="Answer" onChange={(e) => {
                      setBody(e.target.value)}}/>
                </Form.Group>
                <label class="form-label" for="customFile" style={{color:"deeppink"}}>Default file input example</label>
                <input type="file" class="form-control" id="customFile" multiple/>
                <Button variant="primary" type="submit" style={mystyle} onSubmit={handleSubmit}>
                    Submit Your Answer
                </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }


export default AddA;