import { createTheme } from '@mui/material/styles';

const mainColor = '#FF6600'; 
const black = '#000000';     
const white = '#FFFFFF';     

const theme = createTheme({
	palette: {
		primary: {
			main: mainColor,
			contrastText: white,
		},
		secondary: {
			main: black,
			contrastText: white,
		},
		background: {
			default: white,
			paper: mainColor,
		},
		text: {
			primary: white,
			secondary: mainColor,
		},
	},
});

export default theme;
