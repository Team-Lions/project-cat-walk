import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const muiTheme = createMuiTheme({
	overrides: {
		MuiSlider: {
			thumb: {
				color: 'deeppink',
			},
			track: {
				color: 'deeppink',
			},
			rail: {
				color: 'white',
			},
			markLabel: {
				color: 'white',
				fontWeight: 700,
				transform: 'translateX(-100%)',
			},
		},
	},
});

const marks = [
	{
		value: 3.3,
	},
	{
		value: 6.6,
	},
];

export default function ProductBreakDown({ metaData }) {
	let metaDataCharacteristics = metaData.characteristics;
	let characteristics = Object.keys(metaData.characteristics);

	return characteristics.map((character) => {
		return (
			<ThemeProvider theme={muiTheme}>
				<div className="characteristics" key={metaDataCharacteristics[character].id}>
					<Typography id="disabled-slider" gutterBottom>
						{character}
					</Typography>
					<Slider
						disabled
						defaultValue={metaDataCharacteristics[character].value}
						aria-labelledby="disabled-slider"
						max={10}
						marks={marks}
					/>
					<div className="sizeSlider">
						<span>Too Small</span>
						<span>Perfect</span>
						<span>Too Large</span>
					</div>
				</div>
			</ThemeProvider>
		);
	});
}
