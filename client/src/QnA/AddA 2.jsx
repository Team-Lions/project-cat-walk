import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




//import { submitReview } from './PostReq.js';

function AddA(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button onClick={handleShow}>
            Add Answer +
        </Button>

        <Modal show={show} onHide={handleClose} style={{color:"black"}}>
          <Modal.Header closeButton>
            <Modal.Title >{props.product}: {props.question.question_body}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your nickname</Form.Label>
                    <Form.Control type="email" placeholder="Enter nickname" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your answer</Form.Label>
                    <Form.Control plaintext readOnly placeholder="Answer" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Your Answer
                </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }


export default AddA;