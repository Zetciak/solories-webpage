import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	appBar: {
		position: 'relative',
		width: '1239px',
		height: '79px',
		margin: '0px auto',
		marginTop: '17px',
		background: 'transparent',
	},

	appBarBg: {
		width: '100%',
		height: '79px',
		background: '#FFFFFF',
		backdropFilter: 'blur(100px)',
		opacity: '0.2',
		borderRadius: '10000px',
		position: 'absolute',
		'z-index': '-1',
	},

	toolBar: {
		margin: '0px',
		padding: '0px',
	},

	logoDiv: {
		marginTop: '1px',
		marginLeft: '51px',
		minWidth: '132px',
		minHeight: '67px',
	},

	centerElements: {
		marginLeft: 'auto',
		marginTop: '-13px',
		'& ul': {
			color: 'transparent',
			'& li': {
				fontFamily: 'Orbitron',
				fontStyle: 'normal',
				fontWeight: '500',
				fontSize: '14px',
				lineHeight: '200%',
				float: 'left',
				'& a': {
					color: '#636363',
					transition: 'color .5s',
					paddingTop: '10px',
					'&:hover': {
						color: '#979797',
						cursor: 'pointer',
					},
				},
			},
		},
	},

	navStripe: {
		background: '#000000',
		opacity: '0.15',
		width: '1px',
		height: '17px',
		float: 'left',
		marginLeft: '16px',
		marginRight: '16px',
		marginTop: '5px',
	},

	navDisabled: {
		color: 'rgba(99, 99, 99, 0.25)',
		cursor: 'default',
	},

	rightElements: {
		marginLeft: 'auto',
		marginRight: '48px',
		marginTop: '5px',
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
		appBar: {
			width: '86%',
		},
	},
});

export default useStyles;
