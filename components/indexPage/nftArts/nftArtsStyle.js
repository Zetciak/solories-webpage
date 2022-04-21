import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '383px',
		marginTop: '171px',
		//	background: 'white',
		float: 'left',
	},

	ograDiv: {
		width: '1920px',
		margin: '0 auto',
	},

	nftShow: {
		marginTop: '24px',
	},

	frameImage: {
		width: '363px',
		height: '363px',
		position: 'absolute',
		marginTop: '-290px',
	},

	nftImage: {
		width: '280px',
		height: '280px',
		paddingTop: '30px',
		marginLeft: '30px',
	},

	oneNftDiv: {
		width: '383px',
		height: '383px',
		marginLeft: '-100px',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//550px
	['@media (max-width: 550px)']: {
		mainDiv: {
			marginTop: '130px',
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
