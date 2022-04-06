import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		marginTop: '171px',
		float: 'left',
	},

	insideDivTitle: {
		width: '1132px',
		margin: '0 auto',
	},

	insideDiv: {
		width: '1180px',
		margin: '0 auto',
	},

	titleDiv: {
		width: '432px',
		height: '59px',
	},

	allSlides: {
		marginTop: '71px',
	},

	arrowLeft: {
		width: '40px',
		height: '40px',
		float: 'left',
		marginRight: '37px',
		marginTop: '150px',
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
			cursor: 'pointer',
		},
	},

	arrowLeftIcon: {
		transform: 'rotate(180deg)',
		color: 'white',
		width: '22px',
		height: 'auto',
	},

	arrowRight: {
		width: '40px',
		height: '40px',
		float: 'left',
		marginLeft: '27px',
		marginTop: '150px',
		background:
			'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',
		opacity: '0.75',
		border: '2px solid rgba(255, 255, 255, 0.5)',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
		borderRadius: '10000px',
		transform: 'rotate(180deg)',
		transition: 'border .5s, opacity .5s',
		'&:hover': {
			border: '2px solid #FFFFFF',
			opacity: '1',
			cursor: 'pointer',
		},
	},

	arrowRightIcon: {
		transform: 'rotate(-180deg)',
		color: 'white',
		width: '22px',
		height: 'auto',
	},

	sliderDiv: {
		width: '1030px',
		float: 'left',
	},

	insideOneSlideOutside: {
		width: '330px',
	},

	insideOneSlide: {
		width: '300px',
		height: '377px',
		background: '#FFFFFF',
		borderRadius: '18px',
		margin: '0 auto',
	},

	bigImage: {
		width: '252px',
		height: '252px',
		borderRadius: '10px',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: '24px',
	},

	smallImage: {
		width: '72px',
		height: '72px',
		borderRadius: '1000px',
		marginLeft: 'auto',
		marginRight: 'auto',
		padding: '4px',
		borderSize: '3px',
		borderStyle: 'solid',
		borderColor: 'rgb(233,212,218)',
		position: 'absolute',
		top: '3px',
		right: '33px',
	},

	firstLine: {
		marginTop: '18px',
	},

	nameTypo: {
		fontFamily: 'Orbitron',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '24px',
		textTransform: 'uppercase',
		marginLeft: '24px',
		color: '#636363',
		float: 'left',
	},

	roleTypo: {
		marginTop: '8px',
		fontFamily: 'Orbitron',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '12px',
		lineHeight: '24px',
		textTransform: 'uppercase',
		marginLeft: '24px',
		color: '#636363',
		clear: 'both',
	},

	teamLinks: {
		float: 'right',
		marginRight: '24px',
		marginTop: '3px',
	},

	linkedIn: {
		width: '19px',
		height: '19px',
		float: 'left',

		opacity: '1',
		transition: 'opacity .5s',
		'&:hover': {
			opacity: '0.7',
		},
	},

	twitter: {
		width: '19px',
		height: '15px',
		marginLeft: '13px',
		float: 'left',

		opacity: '1',
		transition: 'opacity .5s',
		'&:hover': {
			opacity: '0.7',
		},
	},

	instagram: {
		width: '19px',
		height: '19px',
		float: 'left',

		opacity: '1',
		transition: 'opacity .5s',
		'&:hover': {
			opacity: '0.7',
		},
	},
});

export default useStyles;
