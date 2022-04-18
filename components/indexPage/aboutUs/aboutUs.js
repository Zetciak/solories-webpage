//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';
import ArrowForwardRounded from '@material-ui/icons/ArrowForwardRounded';

//Images
import title from '../../../public/images/indexPage/aboutUs/title.png';
import frame from '../../../public/images/indexPage/aboutUs/frame.png';
import nftgif from '../../../public/images/indexPage/aboutUs/nftgif.gif';

//CSS
import useStyles from './aboutUsStyle';

//Script
function AboutUs() {
	//Style
	const classes = useStyles();
	return (
		<div className={classes.mainDiv}>
			<div className={classes.leftSection} id="aboutUsScroll">
				<div className={classes.nftImage}>
					<Image
						src={nftgif}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
						priority={true}
					/>
				</div>
				<div className={classes.frameImage}>
					<Image
						src={frame}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality="100"
						priority={true}
					/>
				</div>
			</div>
			<div className={classes.rightSection}>
				<div className={classes.titleDiv}>
					<Image
						src={title}
						alt=""
						layout="responsive"
						objectFit="contain"
					/>
				</div>
				<Typography className={classes.rightSectionDesc}>
					Never take a wild animal out of its habitat. One gloomy
					night hunters raided the forest, carrying torches and large
					nets to catch as much of the wildlife as they could. Their
					prey of choice that night? A species of small, nocturnal
					animals with wide, round eyes: Slow lorries. People believe
					they make great pets because of their adorable features,
					but... at what cost? Cute as they are, these little critters
					prefer to be left alone! That night, they were to be taken
					from their homes... Luna, on the other hand, appeared to
					have a different plan. As the Slow Lorries climbed to the
					top of the trees, terrified of the humans poaching them. A
					large earthquake shook the forest! It seemed as if tectonic
					plates grinded like never before, the ground had split into
					two! A huge earthquake opened a sinkhole swallowing up much
					of the terrain, the Lorries rushed into it, hoping to hide
					there from the hunters. Hiding in the crevices, the Lorries
					could only see the Moon. They knew Luna would save
					them...Once the Moon set. Gone were the humans and their
					weapons! The Lorries had climbed out of the crack in the
					world to find their land completely Barron. Then they see in
					the distance a Lemur sunbathing with flowers on his head!
				</Typography>
				<div className={classes.outSideButton}>
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
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
