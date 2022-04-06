import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		marginTop: '62px',
		float: 'left',
	},

	insideDiv: {
		width: '1119px',
		margin: '0 auto',
		paddingBottom: '70px',
	},

	stripeDiv: {
		width: '100%',
		height: '3px',
		background: '#FFFFFF',
		opacity: '0.4',
		backdropFilter: 'blur(100px)',
		marginBottom: '50px',
	},

	leftTitle: {
		float: 'left',
		fontFamily: 'Orbitron',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '18px',
		color: 'rgba(17, 0, 0, 0.75)',
	},

	rightElements: {
		marginTop: '-30px',
		float: 'right',
		'& ul': {
			'& li': {
				display: 'inline-block',
				paddingLeft: '30px',
			},
			'& li:nth-child(1)': {
				paddingLeft: '0px',
			},
		},
	},

	rightElementsElement: {
		minWidth: '38px',
		minHeight: '38px',
		background:
			'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',
		opacity: '0.75',
		border: '2px solid rgba(255, 255, 255, 0.5)',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
		borderRadius: '10000px',

		transition: 'border .5s, opacity .5s',
		'&:hover': {
			border: '2px solid #FFFFFF',
			opacity: '1',
		},
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '77%',
		},
	},
});

export default useStyles;
