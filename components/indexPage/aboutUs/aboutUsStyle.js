import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '1132px',
		margin: '0 auto',
	},

	leftSection: {
		width: '500px',
		height: '729px',
		marginTop: '120px',
		float: 'left',
	},

	rightSection: {
		width: '549px',
		height: '568px',
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
		width: '551px',
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
});

export default useStyles;