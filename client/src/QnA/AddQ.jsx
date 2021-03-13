import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddQ(props) {
    const [show, setShow] = useState(false);
    const [body, setBody] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [product_id, setProduct_id] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
      e.preventDefault();
      let modalData = {
        body,
        name,
        email,
        product_id: props.productID
      };
      props.sendQuestion(e, modalData);
    }

    const mystyle = {
      padding: "10px",
      backgroundColor: "rgb(29, 18, 47)",
      border: "1px solid deepPink"
    }
    return (
      <>
        <Button onClick={handleShow} style={mystyle}>
            Add Question +
        </Button>

        <Modal show={show} onHide={handleClose} style={{color:"rgb(29, 18, 47)"}}>
          <Modal.Header closeButton>
            <Modal.Title >{props.product}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label style={{color:"deeppink"}}>Your nickname</Form.Label>
                    <Form.Control type="text" placeholder="Enter nickname"
                    onChange={(e) => {
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
                    <Form.Label style={{color:"deeppink"}}>Your Question</Form.Label>
                    <Form.Control type="text" placeholder="Question" onChange={(e) => {
                      setBody(e.target.value)}}/>
                </Form.Group>
                <label class="form-label" for="customFile" style={{color:"deeppink"}}>Default file input example</label>
                <input type="file" class="form-control" id="customFile" multiple/>
                <Button variant="primary" type="submit" style={mystyle} onClick={handleSubmit}>
                    Submit Your Question
                </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }


export default AddQ;