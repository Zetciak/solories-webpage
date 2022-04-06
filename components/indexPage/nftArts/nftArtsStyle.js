import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '360px',
		marginTop: '171px',
		background: 'white',
		float: 'left',
	},

	ograDiv: {
		width: '1920px',
		margin: '0 auto',
	},

	nftShow: {
		marginTop: '24px',
		overflow: 'hidden',
	},

	oneNftDiv: {
		width: '254px',
		height: '311px',
		marginRight: '39px',
		marginTop: 'auto',
	},

	oneNftDiva: {
		borderRadius: '10px',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//550px
	['@media (max-width: 550px)']: {
		mainDiv: {
			height: '220px',
			marginTop: '130px',
		},

		oneNftDiv: {
			width: '144px',
			height: '220px',
			marginTop: 'auto',
		},

		ograDiv: {
			width: '100%',
		},
	},

	//380px
	['@media (max-width: 380px)']: {
		mainDiv: {
			marginTop: '150px',
		},
	},
});

export default useStyles;
