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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvUmVsYXRlZEl0ZW1zJkNvbXBhcmlzb25zL1NpbmdsZVJlbGF0ZWRJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG4vLyBpbXBvcnQgcGxhY2VIb2xkZXJJbWcgZnJvbSAnLi9jb250ZW50L3BsYWNlaG9sZGVyaW1nLmpwZWcnO1xuLy8gaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG4vLyBjb25zdCBTaW5nbGVSZWxhdGVkSXRlbSA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbi8vICAgbGV0IHJlbGF0ZWRJdGVtcyA9IHByb2R1Y3RzO1xuLy8gLy9sZXQgcmVsYXRlZEltZ3MgPSBpbWdzXG4vLyAgIGxldCBjYXJkO1xuLy8gICBsZXQgZm9ybWF0dGVkQ2FyZHMgPSBbXTtcblxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbGF0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBpdGVtID0gcmVsYXRlZEl0ZW1zW2ldO1xuLy8gICAgIGNhcmQgPSAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8Q2FyZCBib3JkZXI9XCJkYXJrXCIgc3R5bGU9e3sgd2lkdGg6ICcxNnJlbScsIGhlaWdodDogJzE4cmVtJ319PlxuLy8gICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwbGFjZUhvbGRlckltZ30gLz5cbi8vICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuLy8gICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XG4vLyAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5fVxuLy8gICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuLy8gICAgICAgICAgICAgPENhcmQuVGl0bGU+XG4vLyAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4vLyAgICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4vLyAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cbi8vICAgICAgICAgICAgICAge2l0ZW0uZGVmYXVsdF9wcmljZX1cbi8vICAgICAgICAgICAgIDwvQ2FyZC5TdWJ0aXRsZT5cbi8vICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4vLyAgICAgICAgICAgICAgIOKYheKYheKYheKYheKYhVxuLy8gICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4vLyAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4vLyAgICAgICAgIDwvQ2FyZD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgICAgZm9ybWF0dGVkQ2FyZHMucHVzaChjYXJkKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIHtmb3JtYXR0ZWRDYXJkcy5tYXAoKGNhcmQpID0+IChcbi8vICAgICAgICAgY2FyZFxuLy8gICAgICAgKSl9XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlbGF0ZWRJdGVtOyJdfQ==