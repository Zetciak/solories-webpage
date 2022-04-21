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
		width: '578px',
		height: '58px',
	},

	mainDesc: {
		marginTop: '21px',
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14.68px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
		width: '669px',
	},

	sliderDiv: {
		marginTop: '54px',
	},

	utilityDot: {
		width: '35px',
		height: '35px',
		margin: '0 auto',
		marginTop: '30px',
	},

	sliderDesc: {
		marginTop: '30px',
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: 'rgba(99, 99, 99, 0.75)',
		width: '200px',
		margin: '0 auto',
		textAlign: 'center',
	},

	utility1SlideImage: {
		width: '134px',
		height: '161px',
		margin: '0 auto',
	},

	utility2SlideImage: {
		width: '144px',
		height: '161px',
		margin: '0 auto',
	},

	utility3SlideImage: {
		width: '108px',
		height: '161px',
		margin: '0 auto',
	},

	utility4SlideImage: {
		width: '133px',
		height: '161px',
		margin: '0 auto',
	},

	lineDiv: {
		background: '#A1EEF7',
		opacity: '0.7',
		width: '200%',
		left: '-100%',
		height: '4px',
		position: 'absolute',
		marginTop: '257px',
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

	//650px
	['@media (max-width: 650px)']: {
		titleDiv: {
			width: '90%',
			height: 'auto',
			margin: '0 auto',
		},
	},
});

export default useStyles;
