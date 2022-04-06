import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '1132px',
		margin: '0 auto',
	},

	leftSection: {
		float: 'left',
		width: '500px',
	},

	rightSection: {
		width: '584px',
		height: '622px',
		float: 'right',
	},

	titleDiv: {
		marginTop: '109px',
		width: '494px',
		height: '49px',
	},

	leftSectionDesc: {
		marginTop: '33px',
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
	},

	buttonDiv: {
		marginTop: '16px',
	},

	button: {
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

	button2: {
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

	rightButton: {
		marginLeft: '24px',
	},

	arrowIcon: {
		color: '#636363',
		width: '17px',
		height: 'auto',
		marginLeft: '6px',
		marginRight: '10px',
	},

	rightArrowIcon: {
		color: 'rgba(99, 99, 99, 0.6)',
		width: '17px',
		height: 'auto',
		marginLeft: '6px',
		marginRight: '10px',
	},

	infosDiv: {
		marginTop: '102px',
	},

	infosOneDiv: {
		height: '96px',
		float: 'left',
	},

	infosOneDivStripe: {
		width: '2px',
		height: '64px',
		float: 'left',
		background: '#000000',
		opacity: '0.15',
		marginTop: '10px',
	},

	infosOneDivTitle: {
		fontFamily: 'Orbitron',
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '35px',
		lineHeight: '53px',
		color: '#636363',
		letterSpacing: '0.221092px',
	},

	infosOneDivTitle1: {
		marginLeft: '0px',
		marginRight: '37px',
	},

	infosOneDivTitle2: {
		marginLeft: '37px',
		marginRight: '37px',
	},

	infosOneDivTitle3: {
		marginLeft: '37px',
		marginRight: '0px',
	},

	infosOneDivDesc: {
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '17.6873px',
		lineHeight: '22px',
		color: '#636363',
		letterSpacing: '0.221092px',
		marginTop: '1px',
	},

	infosOneDivDesc1: {
		marginLeft: '0px',
		marginRight: '37px',
	},

	infosOneDivDesc2: {
		marginLeft: '37px',
		marginRight: '37px',
	},

	infosOneDivDesc3: {
		marginLeft: '37px',
		marginRight: '0px',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1439px
	['@media (max-width: 1439px)']: {
		mainDiv: {
			width: '90%',
		},
	},

	//1225px
	['@media (max-width: 1225px)']: {
		outsideRightSection: {
			width: '100%',
			height: '622px',
			float: 'left',
			marginTop: '30px',
		},

		rightSection: {
			float: 'left',
			transform: 'translate(-50%, 0)',
			marginLeft: '50%',
		},

		leftSection: {
			clear: 'both',
			width: '100%',
		},

		titleDiv: {
			width: '494px',
			height: '49px',
			margin: '0 auto',
			marginTop: '39px',
		},

		leftSectionDesc: {
			textAlign: 'center',
			width: '80%',
			margin: '0 auto',
			marginTop: '30px',
		},

		buttonDiv: {
			width: '400px',
			margin: '0 auto',
			marginTop: '16px',
		},

		infosDiv: {
			width: '500px',
			margin: '0 auto',
			marginTop: '102px',
		},
	},

	//575px
	['@media (max-width: 575px)']: {
		outsideRightSection: {
			width: '100%',
			height: 'auto',
		},

		rightSection: {
			width: '100%',
			height: 'auto',
		},
	},

	//555px
	['@media (max-width: 555px)']: {
		titleDiv: {
			width: '90%',
			height: 'auto',
			margin: '0 auto',
			marginTop: '39px',
		},

		leftSectionDesc: {
			marginTop: '20px',
		},

		leftSectionDesc: {
			fontSize: '12px',
			width: '100%',
		},

		infosDiv: {
			width: '365px',
			margin: '0 auto',
			marginTop: '102px',
		},

		infosOneDivTitle: {
			fontSize: '21px',
			lineHeight: '43px',
		},

		infosOneDivDesc: {
			fontSize: '14px',
			lineHeight: '22px',
		},
	},

	//455px
	['@media (max-width: 455px)']: {
		buttonDiv: {
			width: '100%',
			margin: '0 auto',
			marginTop: '16px',
		},

		button: {
			width: '42%',

			'& p': {
				fontSize: '9.5px',
			},
		},

		button2: {
			width: '50%',

			'& p': {
				fontSize: '9.5px',
			},
		},
	},

	//415px
	['@media (max-width: 415px)']: {
		buttonDiv: {
			width: '70%',
			margin: '0 auto',
			marginTop: '16px',
		},

		button: {
			width: '100%',
			'& p': {
				fontSize: '10px',
			},
		},

		button2: {
			width: '100%',
			marginTop: '10px',
			'& p': {
				fontSize: '10px',
			},
		},

		rightButton: {
			marginLeft: '0px',
		},

		infosDiv: {
			marginTop: '142px',
		},
	},

	//410px
	['@media (max-width: 410px)']: {
		infosOneDivTitle1: {
			marginLeft: '0px',
			marginRight: '20px',
		},

		infosOneDivTitle2: {
			marginLeft: '20px',
			marginRight: '20px',
		},

		infosOneDivTitle3: {
			marginLeft: '20px',
			marginRight: '0px',
		},

		infosOneDivDesc1: {
			marginLeft: '0px',
			marginRight: '20px',
		},

		infosOneDivDesc2: {
			marginLeft: '20px',
			marginRight: '20px',
		},

		infosOneDivDesc3: {
			marginLeft: '20px',
			marginRight: '0px',
		},

		infosDiv: {
			width: '295px',
			margin: '0 auto',
			marginTop: '142px',
		},
	},

	//335px
	['@media (max-width: 335px)']: {
		infosOneDivTitle1: {
			marginLeft: '0px',
			marginRight: '15px',
		},

		infosOneDivTitle2: {
			marginLeft: '15px',
			marginRight: '15px',
		},

		infosOneDivTitle3: {
			marginLeft: '15px',
			marginRight: '0px',
		},

		infosOneDivDesc1: {
			marginLeft: '0px',
			marginRight: '15px',
		},

		infosOneDivDesc2: {
			marginLeft: '15px',
			marginRight: '15px',
		},

		infosOneDivDesc3: {
			marginLeft: '15px	',
			marginRight: '0px',
		},

		infosDiv: {
			width: '275px',
			margin: '0 auto',
			marginTop: '142px',
		},
	},
});

export default useStyles;
