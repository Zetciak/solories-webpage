import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '1132px',
		margin: '0 auto',
	},

	leftSection: {
		width: '500px',

		marginTop: '120px',
		float: 'left',
	},

	frameImage: {
		width: '544px',
		height: '544px',
		margin: '0 auto',
		marginTop: '-450px',
	},

	nftImage: {
		width: '382px',
		height: '382px',
		marginTop: '101px',
		marginLeft: '78px',
	},

	rightSection: {
		width: '549px',

		float: 'right',
	},

	titleDiv: {
		marginTop: '70px',
		width: '549px',
		height: '57px',
	},

	rightSectionDesc: {
		marginTop: '27px',
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
		overflow: 'hidden',
		transition: 'height 0.5s',
		//width: '551px',
	},

	button: {
		marginTop: '32px',
		height: '42px',
		border: '2px solid rgba(255, 255, 255, 0.5)',
		background:
			'linear-gradient(262.73deg, #A1EEF7 -11.08%, #FEE396 104.77%)',
		borderRadius: '6px',
		boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',
		transition: 'border .5s',
		float: 'left',

		'&:hover': {
			border: '2px solid #ffffff',
			boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',
		},

		'&:disabled': {
			opacity: '0.75',
			background:
				' linear-gradient(262.73deg, rgba(161, 238, 247, 0.35) -9.01%, rgba(254, 227, 150, 0.35) 98.75%)',
			'& p': {
				color: 'rgba(99, 99, 99, 0.6);',
			},
		},

		'& p': {
			fontFamily: 'Orbitron',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '12px',
			lineHeight: '200%',
			textTransform: 'none',
			color: '#636363',
			marginLeft: '10px',
		},
	},

	arrowIcon: {
		color: '#636363',
		width: '17px',
		height: 'auto',
		marginLeft: '6px',
		marginRight: '10px',
	},

	moreButton: {
		marginTop: '32px',
		width: '39px',
		height: '39px',
		background:
			'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',
		border: '2px solid rgba(255, 255, 255, 0.5)',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
		borderRadius: '10000px',
		opacity: '1.0',

		transition: 'border .5s',
		float: 'right',
		'&:hover': {
			border: '2px solid #FFFFFF',
			cursor: 'pointer',
		},
	},

	moreIcon: {
		color: 'white',
		width: '16px',
		height: 'auto',
		transition: 'transform 0.5s',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1439px
	['@media (max-width: 1439px)']: {
		mainDiv: {
			width: '90%',
		},
	},

	//1230px
	['@media (max-width: 1230px)']: {
		leftSection: {
			display: 'none',
		},

		rightSection: {
			width: '100%',
			clear: 'both',
		},

		titleDiv: {
			width: '549px',
			height: '57px',
			margin: '0 auto',
			marginTop: '70px',
		},

		rightSectionDesc: {
			width: '100%',
			textAlign: 'center',
		},

		button: {
			width: '100%',
		},

		outSideButton: {
			width: '200px',
			margin: '0 auto',
			marginTop: '2px',
		},
	},

	//913px
	['@media (max-width: 913px)']: {
		rightSectionDesc: {
			fontSize: '12px',
			lineHeight: '200%',
		},
	},

	//610px
	['@media (max-width: 610px)']: {
		titleDiv: {
			marginTop: '70px',
			width: '100%',
			height: 'auto',
		},
	},

	//580px
	['@media (max-width: 580px)']: {
		rightSectionDesc: {
			fontSize: '10px',
			lineHeight: '200%',
		},
	},

	//350px
	['@media (max-width: 350px)']: {
		rightSectionDesc: {
			fontSize: '9.5px',
			lineHeight: '200%',
		},
	},
});

export default useStyles;
