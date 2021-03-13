import React from 'react';
import ModalBox from './Modal.jsx';

const ComparisonModal = ({currentProduct, comparisonProduct, currentProductName, comparisonProductName}) => {

  const [modalVisible, setModalVisible] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick} id="fav-button">✰</button>
      <ModalBox show={modalVisible} onHide={() => {setModalVisible(false)}} currentProduct={currentProduct} comparisonProduct={comparisonProduct} currentProductName={currentProductName} comparisonProductName={comparisonProductName}/>
    </div>
  )
};

export default ComparisonModal;