import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
    overrides:{
      MuiSlider: {
        thumb:{
        color: "deeppink",
        },
        track: {
          color: 'deeppink'
        },
        rail: {
          color: 'white'
        },
        markLabel: {
            color:'white',
            fontWeight:700,
            transform:'translateX(-100%)',
        }
      }
  }
  });

const sizeMarks = [
  {
    value: 33,
  },
  {
    value: 66,
  },
  {
    value: 100,
  }
];

const comfortMarks = [
    {
      value: 25,
    },
    {
      value: 75,
    },
    {
      value: 100,
    }
  ];


export default function ProductBreakDown({ metaData }) {

  //let comfortVal = (metaData.characteristics.Comfort.value)*10;
  //let sizeVal = (metaData.characteristics.Fit.value)*10;
  return (
    <ThemeProvider theme={muiTheme}>
        <div>
        <Typography id="disabled-slider" gutterBottom>
            Size
        </Typography >
        <Slider
            disabled defaultValue={20}
            aria-labelledby="disabled-slider"
            marks={sizeMarks}
        />
        <div className="sizeSlider">
            <span>Too Small</span>
            <span>Perfect</span>
            <span>Too Large</span>
        </div>
        <br/>
        <Typography id="disabled-slider" gutterBottom>
            Comfort
        </Typography >
        <Slider
            disabled defaultValue={40}
            aria-labelledby="disabled-slider"
            marks={comfortMarks}
        />
        <div className="sizeSlider">
            <span>Poor</span>
            <span>Perfect</span>
        </div>
        
        </div>
    </ThemeProvider>
  );
}



