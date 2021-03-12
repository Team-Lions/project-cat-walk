import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CharacteristicsBreakDown({ metaData }) {
	let characteristics = Object.keys(metaData.characteristics);

	return characteristics.map((character) => {
		return (
			<>
				<Form.Group>
					<Form.Label>{character} &nbsp;</Form.Label>
				</Form.Group>
				<div className="characteristicsForm">
					<Form.Check value="1" type="radio" aria-label="radio 1" label="1 " />
					<Form.Check value="2" type="radio" aria-label="radio 1" label="2 " />
					<Form.Check value="3" type="radio" aria-label="radio 1" label="3 " />
					<Form.Check value="4" type="radio" aria-label="radio 1" label="4 " />
					<Form.Check value="5" type="radio" aria-label="radio 1" label="5 " />
				</div>
			</>
		);
	});
}
