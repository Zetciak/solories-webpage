//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';
import ArrowForwardRounded from '@material-ui/icons/ArrowForwardRounded';

//Images
import title from '../../../public/images/indexPage/firstSection/title.png';
import island from '../../../public/images/indexPage/firstSection/island.png';

//CSS
import useStyles from './firstSectionStyle';

//Script
function FirstSection() {
	//Style
	const classes = useStyles();
	return (
		<div className={classes.mainDiv} id="overviewScroll">
			<div className={classes.leftSection}>
				<div className={classes.titleDiv}>
					<Image
						src={title}
						alt=""
						layout="responsive"
						objectFit="contain"
						priority={true}
					/>
				</div>
				<Typography className={classes.leftSectionDesc}>
					Our Lorries have had to contend with intruders stealing
					homeland and separating families. They have fought this
					persecution of being held captive as a pet when they belong
					in select conditions. After a life altering natural disaster
					the lorries had to escape. The new destination they reside
					in is considered paradise.
					<b> Guess you can say they claimed their throne.</b>
					<br />
					#ClaimTheThrone
				</Typography>
				<div className={classes.buttonDiv}>
					<Button
						variant="contained"
						className={classes.button}
						href="https://discord.gg/JdxwwZfpXh"
						target="_blank"
						endIcon={
							<ArrowForwardRounded
								className={classes.arrowIcon}
							/>
						}
					>
						<Typography>Join Discord</Typography>
					</Button>
					<Button
						variant="contained"
						className={`${classes.button2} ${classes.rightButton}`}
						target="_blank"
						endIcon={
							<ArrowForwardRounded
								className={classes.rightArrowIcon}
							/>
						}
						disabled
					>
						<Typography>Visit Marketplace</Typography>
					</Button>
				</div>
				<div className={classes.infosDiv}>
					<div className={classes.infosOneDiv}>
						<Typography
							className={`${classes.infosOneDivTitle} ${classes.infosOneDivTitle1}`}
						>
							35m+
						</Typography>
						<Typography
							className={`${classes.infosOneDivDesc} ${classes.infosOneDivDesc1}`}
						>
							Artworks
						</Typography>
					</div>
					<div className={classes.infosOneDivStripe}></div>
					<div className={classes.infosOneDiv}>
						<Typography
							className={`${classes.infosOneDivTitle} ${classes.infosOneDivTitle2}`}
						>
							1,232
						</Typography>
						<Typography
							className={`${classes.infosOneDivDesc} ${classes.infosOneDivDesc2}`}
						>
							Holders
						</Typography>
					</div>
					<div className={classes.infosOneDivStripe}></div>
					<div className={classes.infosOneDiv}>
						<Typography
							className={`${classes.infosOneDivTitle} ${classes.infosOneDivTitle3}`}
						>
							2,222
						</Typography>
						<Typography
							className={`${classes.infosOneDivDesc} ${classes.infosOneDivDesc3}`}
						>
							Supply
						</Typography>
					</div>
				</div>
			</div>
			<div className={classes.outsideRightSection}>
				<div className={classes.rightSection}>
					<Image
						src={island}
						alt=""
						layout="responsive"
						objectFit="contain"
					/>
				</div>
			</div>
		</div>
	);
}

export default FirstSection;
