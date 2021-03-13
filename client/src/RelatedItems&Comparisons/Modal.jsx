import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';

const ModalBox = (props) => {
  let currentProductFeatures = props.currentProduct;
  let currentChecks = currentProductFeatures.length;
  let comparisonProductFeatures = props.comparisonProduct;
  let comparisonChecks = comparisonProductFeatures.length;
  let divMaker = currentProductFeatures.map((div) => (
      <div key={Math.random()}>
        <div id='to-be-empty'>
          {'ignore me'}
        </div>
      </div>
      ))

  let data = currentProductFeatures.concat(comparisonProductFeatures).map((feature) => (
    <div key={feature.value}>
      {`${feature.value} ${feature.feature}`}
    </div>
  ))
  let formattedFeatures = (
    <div>
      {data}
    </div>
  )

  let check = <span id='check-mark'>&#10003;</span>;

  let checkL = currentProductFeatures.map((feat) => (
    <div key={feat.value}>
      {check}
    </div>
  ))
  let checkR = comparisonProductFeatures.map((feat)=>(
    <div key={feat.feature}>
      {check}
    </div>
  ))

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            Product Comparison
          </Modal.Title>
        </Modal.Header >
        <Modal.Body >
          <Container>
            <Row>
              <Col xs={12} md={8}>
                {props.currentProductName}
              </Col>
              <Col xs={6} md={4}>
                {props.comparisonProductName}
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
              {checkL}
              </Col>
              <Col xs={6} md={4}>
                {data}
              </Col>
              <Col xs={6} md={4}>
              {divMaker}
              {checkR}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalBox;