import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		marginTop: '171px',
		float: 'left',
	},

	insideDiv: {
		width: '1132px',
		margin: '0 auto',
	},

	titleDiv: {
		width: '260px',
		height: '72px',
	},

	mainDesc: {
		marginTop: '21px',
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
		width: '425px',
	},

	progressDiv: {
		marginTop: '30px',
	},

	lineDiv: {
		marginLeft: '17px',
		float: 'left',
		width: '80%',
		height: '5px',
		marginTop: '18px',
	},

	circleDiv: {
		width: '40px',
		height: '40px',
		float: 'left',
	},

	sliderDiv: {
		marginTop: '68px',
	},

	slide1Title: {
		width: '208px',
		height: '51px',
	},

	slide2Title: {
		width: '166px',
		height: '51px',
	},

	slide3Title: {
		width: '158px',
		height: '51px',
	},

	roadmapElements: {
		marginTop: '100px',
		clear: 'both',
	},

	roadmapElementsCircle: {
		width: '20px',
		height: '20px',
		float: 'left',
	},

	roadmapElementsText: {
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
		marginLeft: '13px',
		marginTop: '-3px',
		textAlign: 'left',
		float: 'right',
		width: '91%',
	},

	roadmapElementsOne: {
		clear: 'both',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1439px
	['@media (max-width: 1439px)']: {
		insideDiv: {
			width: '90%',
			margin: '0 auto',
		},
	},

	//1020px
	['@media (max-width: 1020px)']: {
		titleDiv: {
			margin: '0 auto',
		},

		mainDesc: {
			marginTop: '21px',
			width: '100%',
			textAlign: 'center',
		},
	},

	//1000px
	['@media (max-width: 1000px)']: {
		lineDiv: {
			marginTop: '14px',
		},
	},

	//335px
	['@media (max-width: 335px)']: {
		titleDiv: {
			width: '90%',
			height: 'auto',
			margin: '0 auto',
		},
	},

	//427px
	['@media (max-width: 427px)']: {
		lineDiv: {
			marginTop: '16px',
		},

		roadmapElementsText: {
			fontSize: '13px',
			width: '89%',
		},
	},

	//355px
	['@media (max-width: 355px)']: {
		lineDiv: {
			marginTop: '16px',
		},

		roadmapElementsText: {
			fontSize: '13px',
			width: '87%',
		},

		lineDiv: {
			width: '70%',
		},
	},
});

export default useStyles;
