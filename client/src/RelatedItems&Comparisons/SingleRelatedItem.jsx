// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import placeHolderImg from './content/placeholderimg.jpeg';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SingleRelatedItem = ({ products }) => {
//   let relatedItems = products;
// //let relatedImgs = imgs
//   let card;
//   let formattedCards = [];

//   for (let i = 0; i < relatedItems.length; i++) {
//     let item = relatedItems[i];
//     card = (
//       <div>
//         <Card border="dark" style={{ width: '16rem', height: '18rem'}}>
//           <Card.Img variant="top" src={placeHolderImg} />
//           <Card.Body>
//             <Card.Subtitle className="mb-2 text-muted">
//               {item.category}
//             </Card.Subtitle>
//             <Card.Title>
//               {item.name}
//             </Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               {item.default_price}
//             </Card.Subtitle>
//             <Card.Text>
//               ★★★★★
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//     formattedCards.push(card);
//   }

//   return (
//     <div>
//       {formattedCards.map((card) => (
//         card
//       ))}
//     </div>
//   )
// };

// export default SingleRelatedItem;