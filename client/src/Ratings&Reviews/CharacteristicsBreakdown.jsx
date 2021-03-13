import React from 'react';
import Form from 'react-bootstrap/Form';

export default function CharacteristicsBreakDown({
	metaData,
	setCharacteristics,
	characteristics,
}) {
	let allCharacteristics = Object.entries(metaData.characteristics);

	return allCharacteristics.map((character) => {
		return (
			<>
				<Form.Group>
					<Form.Label>{character[0]} &nbsp;</Form.Label>
				</Form.Group>
				<div className="characteristicsForm">
					<Form.Check
						value="1"
						type="radio"
						aria-label="radio 1"
						label="1 "
						name="characteristicsRadio"
						onClick={(e) => {
							setCharacteristics([
								...characteristics,
								{
									[character[1].id]: e.target.value,
								},
							]);
						}}
					/>
					<Form.Check
						value="2"
						type="radio"
						aria-label="radio 1"
						label="2 "
						name="characteristicsRadio"
						onClick={(e) => {
							setCharacteristics([
								...characteristics,
								{
									[character[1].id]: e.target.value,
								},
							]);
						}}
					/>
					<Form.Check
						value="3"
						type="radio"
						aria-label="radio 1"
						label="3 "
						name="characteristicsRadio"
						onClick={(e) => {
							setCharacteristics([
								...characteristics,
								{
									[character[1].id]: e.target.value,
								},
							]);
						}}
					/>
					<Form.Check
						value="4"
						type="radio"
						aria-label="radio 1"
						label="4 "
						name="characteristicsRadio"
						onClick={(e) => {
							setCharacteristics([
								...characteristics,
								{
									[character[1].id]: e.target.value,
								},
							]);
						}}
					/>
					<Form.Check
						value="5"
						type="radio"
						aria-label="radio 1"
						label="5 "
						name="characteristicsRadio"
						onClick={(e) => {
							setCharacteristics([
								...characteristics,
								{
									[character[1].id]: e.target.value,
								},
							]);
						}}
					/>
				</div>
			</>
		);
	});
}
