import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StarRating from './StarRating.jsx';
import CharacteristicsBreakDown from './CharacteristicsBreakdown.jsx';

//import { submitReview } from './PostReq.js';

function AddReview({ metaData }) {
	const [show, setShow] = useState(false);
	const [rating, setRating] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const handleSubmit = () => alert('Review Submitted!');

	return (
		<>
			<Button className="ReviewBTN" onClick={handleShow}>
				ADD REVIEW +
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Write Your Review</Modal.Title>
				</Modal.Header>
				<p>&nbsp;&nbsp;&nbsp;About the "product name here"</p>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>
								Overall Rating &nbsp;&nbsp;
								<StarRating rating={rating} setRating={setRating} />
							</Form.Label>
						</Form.Group>
						<Form.Group>
							<Form.Label>Do you recommend this product?</Form.Label>
							<Form.Check
								value="true"
								type="radio"
								aria-label="radio 1"
								label="Yes"
							/>
							<Form.Check
								value="false"
								type="radio"
								aria-label="radio 2"
								label="No"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Characteristics</Form.Label>
							<CharacteristicsBreakDown metaData={metaData} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Review Summary</Form.Label>
							<Form.Control type="text" placeholder="Add Review Summary" />
						</Form.Group>
						<Form.Group>
							<Form.Label>Review Body</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Please Elaborate"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter Name" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						Add Review
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddReview;
