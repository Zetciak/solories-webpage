import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	background: {
		width: '100%',
		height: '100%',
		background: 'linear-gradient(107.9deg, #A1EEF7 15.2%, #FEE396 100.2%)',
		position: 'fixed',
		'z-index': '-1',
		top: '0',
		left: '0',
		right: '0',
	},

	indexStripes: {
		width: '1440px',
		height: '5788px',
		backgroundImage: "url('https://i.imgur.com/G5IkV7R.png')",
		position: 'absolute',
		'z-index': '-1',
		top: '0',
		left: '0',
		right: '0',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1439px
	['@media (max-width: 1439px)']: {
		indexStripes: {
			width: '100%',
			height: '300%',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
	},
});

export default useStyles;
