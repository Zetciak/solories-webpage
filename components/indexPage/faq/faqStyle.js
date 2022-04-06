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
		width: '690px',
		height: '76px',
	},

	expandArrow: {
		width: '40px',
		height: '40px',
		background:
			'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',
		border: '2px solid #FFFFFF',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
		borderRadius: '10000px',
		transform: 'rotate(-90deg)',
		transition: 'transform .5s',
	},

	panelDetails: {
		background:
			'radial-gradient(59.18% 59.18% at 50.73% 100.25%, rgba(222, 190, 205, 0.2) 0%, rgba(241, 226, 220, 0.2) 100%), linear-gradient(156.26deg, rgba(255, 255, 255, 0.2) -4.88%, rgba(255, 255, 255, 0) 147.21%)',
		border: '5px solid #FFFFFF55',
		borderRadius: '0px 0px 11.3918px 11.3918px',
	},

	title: {
		fontFamily: 'Orbitron',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '25px',
		lineHeight: '150%',
		marginLeft: '10px',
		color: '#636363',
		marginTop: '5px',
	},

	desc: {
		fontFamily: 'Alef',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '200%',
		marginLeft: '10px',
		color: '#010101',
		marginTop: '5px',
	},

	accordionMargin: {
		marginTop: '71px',
	},
});

export default useStyles;
